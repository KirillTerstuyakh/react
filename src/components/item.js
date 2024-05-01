import React, { useState } from 'react';
import './item.css';

const Item = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerClick = (id, option) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [id]: option
    }));
  };

  return (
    <div className="item-container">
      {questions.map(riddle => (
        <div key={riddle.id} className="riddle">
          <p>{riddle.description}</p>
          <ul>
            <li onClick={() => handleAnswerClick(riddle.id, 1)} className={selectedAnswers[riddle.id] === 1 ? "selected" : ""}>{riddle.option1}</li>
            <li onClick={() => handleAnswerClick(riddle.id, 2)} className={selectedAnswers[riddle.id] === 2 ? "selected" : ""}>{riddle.option2}</li>
            <li onClick={() => handleAnswerClick(riddle.id, 3)} className={selectedAnswers[riddle.id] === 3 ? "selected" : ""}>{riddle.option3}</li>
            <li onClick={() => handleAnswerClick(riddle.id, 4)} className={selectedAnswers[riddle.id] === 4 ? "selected" : ""}>{riddle.option4}</li>
          </ul>
          {selectedAnswers[riddle.id] && (selectedAnswers[riddle.id] === riddle.correct ? <p className="correct-answer">Правильно!</p> : <p className="incorrect-answer">Неправильно!</p>)}
        </div>
      ))}
    </div>
  );
}

export default Item;
