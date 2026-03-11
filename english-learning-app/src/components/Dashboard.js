import React, { useState, useMemo } from 'react';
import '../styles/Dashboard.css';
import ProgressChart from './ProgressChart';

function Dashboard({ flashcards, userProgress, onStartLearning }) {
  const [selectedDay, setSelectedDay] = useState(null);

  // Tính toán thống kê
  const stats = useMemo(() => {
    const totalCards = flashcards.length;
    const reviewedCards = Object.keys(userProgress).length;
    const masteredCards = Object.values(userProgress).filter(p => p.easeFactor > 2.5).length;

    // Lấy các card cần review hôm nay
    const now = Date.now();
    const cardsForToday = flashcards.filter(card => {
      const progress = userProgress[card.id];
      if (!progress) return true;
      return progress.nextReview <= now;
    });

    // Nhóm card theo day
    const cardsByDay = {};
    flashcards.forEach(card => {
      const day = card.day || 'unknown';
      if (!cardsByDay[day]) {
        cardsByDay[day] = {
          total: 0,
          reviewed: 0,
          mastered: 0,
          title: card.day_title || `Day ${day}`
        };
      }
      cardsByDay[day].total += 1;

      const progress = userProgress[card.id];
      if (progress) {
        cardsByDay[day].reviewed += 1;
        if (progress.easeFactor > 2.5) {
          cardsByDay[day].mastered += 1;
        }
      }
    });

    return {
      totalCards,
      reviewedCards,
      masteredCards,
      cardsForToday: cardsForToday.length,
      cardsByDay
    };
  }, [flashcards, userProgress]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>📊 Bảng Điều Khiển Học Tập</h2>
        <p>Theo dõi tiến độ học tập của bạn</p>
      </div>

      {/* Thống kê tổng hợp */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <div className="stat-value">{stats.totalCards}</div>
            <div className="stat-label">Tổng Flashcard</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <div className="stat-value">{stats.reviewedCards}</div>
            <div className="stat-label">Đã Ôn Tập</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-value">{stats.masteredCards}</div>
            <div className="stat-label">Đã Nắm Vững</div>
          </div>
        </div>
        <div className="stat-card highlight">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-value">{stats.cardsForToday}</div>
            <div className="stat-label">Cần Ôn Hôm Nay</div>
          </div>
        </div>
      </div>

      {/* Biểu đồ tiến độ */}
      <div className="progress-section">
        <h3>📈 Biểu Đồ Tiến Độ</h3>
        <ProgressChart userProgress={userProgress} flashcards={flashcards} />
      </div>

      {/* Danh sách ngày học */}
      <div className="days-section">
        <h3>📅 Tiến Độ Theo Bài Học</h3>
        <div className="days-grid">
          {Object.entries(stats.cardsByDay)
            .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
            .map(([day, dayStats]) => (
              <div
                key={day}
                className={`day-card ${selectedDay === day ? 'selected' : ''}`}
                onClick={() => setSelectedDay(day)}
              >
                <div className="day-header">
                  <h4>{dayStats.title}</h4>
                </div>
                <div className="day-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${dayStats.total > 0 ? (dayStats.reviewed / dayStats.total) * 100 : 0}%`
                      }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {dayStats.reviewed}/{dayStats.total} ({dayStats.mastered} nắm vững)
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Nút bắt đầu học */}
      <div className="action-section">
        <button className="btn-primary btn-large" onClick={onStartLearning}>
          🎓 Bắt Đầu Học Bây Giờ
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
