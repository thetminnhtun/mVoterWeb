import React, { useEffect, useState, useRef } from 'react';

import './FaqItem.module.scss';

const textLength = 120;

const FaqItem = (props) => {
  const {
    faq: {
      attributes: {
        question,
        answer,
      }
    }
  } = props;

  const answerRef = useRef(null);
  const [shouldAnswerTruncate, setAnswerTruncate] = useState(true);

  function onClickSeeMore() {
    setAnswerTruncate(!shouldAnswerTruncate);
  }

  return (
    <li>
      <div className="FaqItem">
        <span className="FaqItem__question">
          {question}
        </span>
        <span className="FaqItem__answer" ref={answerRef}>
          <span className="answer cursor-pointer">
            {
              answer.length > textLength && shouldAnswerTruncate ?
                <div
                  onClick={onClickSeeMore}
                  dangerouslySetInnerHTML={{ __html: answer.slice(0, textLength).concat(` ... <span style="color: #696969">See more</span>`)}}>
                  </div>
                  :
                <span onClick={onClickSeeMore} dangerouslySetInnerHTML={{ __html: answer }}></span>
            }
          </span>
        </span>
      </div>
    </li>
  );
};

export default FaqItem;