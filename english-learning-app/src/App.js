import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import FlashcardLearning from './components/FlashcardLearning';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import flashcardsData from './data/flashcards_data.json';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [flashcards, setFlashcards] = useState([]);
  const [userProgress, setUserProgress] = useState({});

  // Khởi tạo dữ liệu khi component mount
  useEffect(() => {
    // Load flashcards từ file JSON
    const processedFlashcards = flashcardsData.map((card, index) => ({
      ...card,
      id: card.id || `card_${index}`
    }));
    setFlashcards(processedFlashcards);

    // Load progress từ localStorage
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Lưu progress khi thay đổi
  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const handleUpdateProgress = useCallback((cardId, quality) => {
    setUserProgress(prev => {
      const newProgress = { ...prev };
      if (!newProgress[cardId]) {
        newProgress[cardId] = {
          interval: 1,
          easeFactor: 2.5,
          nextReview: Date.now(),
          repetitions: 0,
          lastReview: 0
        };
      }

      const progress = newProgress[cardId];
      progress.lastReview = Date.now();
      progress.repetitions += 1;

      // SM-2 Algorithm (Spaced Repetition)
      if (quality < 3) {
        progress.repetitions = 0;
        progress.interval = 1;
      } else {
        if (progress.repetitions === 1) {
          progress.interval = 1;
        } else if (progress.repetitions === 2) {
          progress.interval = 3;
        } else {
          progress.interval = Math.ceil(progress.interval * progress.easeFactor);
        }
      }

      progress.easeFactor = Math.max(
        1.3,
        progress.easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
      );

      progress.nextReview = Date.now() + progress.interval * 24 * 60 * 60 * 1000;

      return newProgress;
    });
  }, []);

  return (
    <div className="App">
      <Navigation onViewChange={setCurrentView} currentView={currentView} />
      <main className="main-content">
        {currentView === 'dashboard' && (
          <Dashboard
            flashcards={flashcards}
            userProgress={userProgress}
            onStartLearning={() => setCurrentView('learning')}
          />
        )}
        {currentView === 'learning' && (
          <FlashcardLearning
            flashcards={flashcards}
            userProgress={userProgress}
            onUpdateProgress={handleUpdateProgress}
            onBack={() => setCurrentView('dashboard')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
