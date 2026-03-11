import React, { useMemo } from 'react';
import '../styles/ProgressChart.css';

function ProgressChart({ userProgress, flashcards }) {
  const data = useMemo(() => {
    const dayData = {};

    flashcards.forEach(card => {
      const day = parseInt(card.day) || 0;
      if (!dayData[day]) {
        dayData[day] = {
          day,
          title: card.day_title,
          total: 0,
          reviewed: 0,
          mastered: 0
        };
      }

      dayData[day].total += 1;

      const progress = userProgress[card.id];
      if (progress) {
        dayData[day].reviewed += 1;
        if (progress.repetitions > 2) {
          dayData[day].mastered += 1;
        }
      }
    });

    return Object.values(dayData)
      .sort((a, b) => a.day - b.day)
      .slice(0, 10);
  }, [flashcards, userProgress]);

  const maxValue = Math.max(...data.map(d => d.total), 10);

  return (
    <div className="progress-chart">
      <div className="chart-container">
        <div className="y-axis">
          <div className="y-label">Số lượng</div>
        </div>
        <div className="chart">
          {data.map((item, index) => (
            <div key={index} className="bar-group">
              <div className="bars">
                <div
                  className="bar total"
                  style={{ height: `${(item.total / maxValue) * 300}px` }}
                  title={`Tổng: ${item.total}`}
                ></div>
                <div
                  className="bar reviewed"
                  style={{ height: `${(item.reviewed / maxValue) * 300}px` }}
                  title={`Đã ôn: ${item.reviewed}`}
                ></div>
                <div
                  className="bar mastered"
                  style={{ height: `${(item.mastered / maxValue) * 300}px` }}
                  title={`Nắm vững: ${item.mastered}`}
                ></div>
              </div>
              <div className="x-label">Ngày {item.day}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color total"></div>
          <span>Tổng số</span>
        </div>
        <div className="legend-item">
          <div className="legend-color reviewed"></div>
          <span>Đã ôn tập</span>
        </div>
        <div className="legend-item">
          <div className="legend-color mastered"></div>
          <span>Nắm vững</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressChart;
