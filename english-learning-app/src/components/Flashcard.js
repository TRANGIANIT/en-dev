import React, { useState } from 'react';
import '../styles/Flashcard.css';

function Flashcard({
  card,
  onCorrect,
  onGood,
  onNeutral,
  onWrong,
  onSkip
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowResponse(false);
    }
  };

  const handleResponse = (callback) => {
    setShowResponse(true);
    setTimeout(() => {
      callback();
      setIsFlipped(false);
      setShowResponse(false);
    }, 500);
  };

  return (
    <div className="flashcard-container">
      <div className="card-type-badge">
        {card.type === 'vocabulary' ? '📝 Từ Vựng' : '📖 Ngữ Pháp'}
      </div>

      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''} ${showResponse ? 'showing-response' : ''}`}
        onClick={handleFlip}
      >
        <div className="card-front">
          <div className="card-label">Câu Hỏi</div>
          <div className="card-content">
            <p className="card-text">{card.front}</p>
          </div>
          <div className="card-footer">Click để xem đáp án →</div>
        </div>

        <div className="card-back">
          <div className="card-label">Đáp Án</div>
          <div className="card-content">
            <p className="card-text">{card.back}</p>
            {card.example && (
              <div className="card-example">
                <strong>Ví dụ:</strong>
                <p>{card.example}</p>
              </div>
            )}
          </div>
          <div className="card-footer">Click để xem câu hỏi ←</div>
        </div>
      </div>

      <div className="response-buttons">
        <div className="button-group">
          <button
            className="btn-response wrong"
            onClick={() => handleResponse(onWrong)}
            title="Sai - Tôi không biết"
          >
            <span className="emoji">😞</span>
            <span className="text">Sai</span>
          </button>
          <button
            className="btn-response neutral"
            onClick={() => handleResponse(onNeutral)}
            title="Bình thường - Vừa nhớ"
          >
            <span className="emoji">😐</span>
            <span className="text">Bình Thường</span>
          </button>
          <button
            className="btn-response good"
            onClick={() => handleResponse(onGood)}
            title="Tốt - Nhớ rõ"
          >
            <span className="emoji">😊</span>
            <span className="text">Tốt</span>
          </button>
          <button
            className="btn-response correct"
            onClick={() => handleResponse(onCorrect)}
            title="Hoàn hảo - Rất chắc chắn"
          >
            <span className="emoji">🤩</span>
            <span className="text">Hoàn Hảo</span>
          </button>
        </div>
      </div>

      <div className="learning-tips">
        <p>
          💡 Gợi ý: Trả lời sau khi lật thẻ. Tôn trọng sự thật - đánh giá chính xác
          sẽ giúp hệ thống học tối ưu.
        </p>
      </div>
    </div>
  );
}

export default Flashcard;
