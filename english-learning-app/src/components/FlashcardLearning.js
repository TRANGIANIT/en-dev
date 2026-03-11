import React, { useState, useMemo } from 'react';
import '../styles/FlashcardLearning.css';
import Flashcard from './Flashcard';

function FlashcardLearning({ flashcards, userProgress, onUpdateProgress, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionStats, setSessionStats] = useState({
    correct: 0,
    incorrect: 0,
    skipped: 0
  });
  const [showResults, setShowResults] = useState(false);

  // Lấy các card cần review hôm nay
  const cardsToReview = useMemo(() => {
    const now = Date.now();
    return flashcards.filter(card => {
      const progress = userProgress[card.id];
      if (!progress) return true;
      return progress.nextReview <= now;
    });
  }, [flashcards, userProgress]);

  const currentCard = cardsToReview[currentIndex];

  const handleResponse = (quality) => {
    if (currentCard) {
      onUpdateProgress(currentCard.id, quality);

      setSessionStats(prev => ({
        ...prev,
        correct: prev.correct + (quality >= 3 ? 1 : 0),
        incorrect: prev.incorrect + (quality < 3 ? 1 : 0)
      }));
    }

    // Chuyển sang card tiếp theo
    if (currentIndex < cardsToReview.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleSkip = () => {
    setSessionStats(prev => ({
      ...prev,
      skipped: prev.skipped + 1
    }));

    if (currentIndex < cardsToReview.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSessionStats({ correct: 0, incorrect: 0, skipped: 0 });
    setShowResults(false);
  };

  if (cardsToReview.length === 0) {
    return (
      <div className="flashcard-learning">
        <div className="no-cards-container">
          <div className="emoji">🎉</div>
          <h2>Hoàn tất rồi!</h2>
          <p>Bạn không có flashcard nào để ôn tập hôm nay.</p>
          <p>Quay lại vào ngày mai để tiếp tục học!</p>
          <button className="btn-primary" onClick={onBack}>
            ← Quay lại Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="flashcard-learning">
        <div className="results-container">
          <div className="results-header">
            <h2>🎓 Kết Quả Phiên Học</h2>
          </div>
          <div className="results-stats">
            <div className="result-item correct">
              <div className="result-emoji">✅</div>
              <div className="result-content">
                <div className="result-number">{sessionStats.correct}</div>
                <div className="result-label">Trả Lời Đúng</div>
              </div>
            </div>
            <div className="result-item incorrect">
              <div className="result-emoji">❌</div>
              <div className="result-content">
                <div className="result-number">{sessionStats.incorrect}</div>
                <div className="result-label">Trả Lời Sai</div>
              </div>
            </div>
            <div className="result-item skipped">
              <div className="result-emoji">⏭️</div>
              <div className="result-content">
                <div className="result-number">{sessionStats.skipped}</div>
                <div className="result-label">Bỏ Qua</div>
              </div>
            </div>
          </div>

          <div className="results-progress">
            <h3>Tỷ Lệ Thành Công</h3>
            <div className="progress-circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" className="progress-bg" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="progress-value"
                  style={{
                    strokeDasharray: `${(sessionStats.correct / (sessionStats.correct + sessionStats.incorrect || 1)) * 283} 283`
                  }}
                />
              </svg>
              <div className="circle-text">
                <div className="percentage">
                  {sessionStats.correct + sessionStats.incorrect > 0
                    ? Math.round((sessionStats.correct / (sessionStats.correct + sessionStats.incorrect)) * 100)
                    : 0}
                  %
                </div>
              </div>
            </div>
          </div>

          <div className="results-actions">
            <button className="btn-primary" onClick={handleReset}>
              🔄 Ôn Tập Lại
            </button>
            <button className="btn-secondary" onClick={onBack}>
              ← Quay lại Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flashcard-learning">
      <div className="learning-header">
        <button className="btn-back" onClick={onBack}>
          ← Quay lại
        </button>
        <div className="session-info">
          <h2>📚 Phiên Học</h2>
          <div className="progress-info">
            <span>Thẻ {currentIndex + 1} / {cardsToReview.length}</span>
            <div className="progress-bar-small">
              <div
                className="progress-fill-small"
                style={{
                  width: `${((currentIndex + 1) / cardsToReview.length) * 100}%`
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="session-stats">
          <span className="stat">✅ {sessionStats.correct}</span>
          <span className="stat">❌ {sessionStats.incorrect}</span>
          <span className="stat">⏭️ {sessionStats.skipped}</span>
        </div>
      </div>

      <div className="learning-content">
        {currentCard && (
          <Flashcard
            card={currentCard}
            onCorrect={() => handleResponse(5)}
            onGood={() => handleResponse(4)}
            onNeutral={() => handleResponse(3)}
            onWrong={() => handleResponse(2)}
            onSkip={handleSkip}
          />
        )}
      </div>

      <div className="learning-footer">
        <button className="btn-skip" onClick={handleSkip}>
          ⏭️ Bỏ Qua
        </button>
      </div>
    </div>
  );
}

export default FlashcardLearning;
