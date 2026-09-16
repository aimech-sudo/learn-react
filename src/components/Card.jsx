import React from "react";

const Card = ({ imgUrl, itemName, onButtonClick }) => {
  return (
    <div className="Card">
      <img src={imgUrl}></img>
      
      {/* <p>{itemName}</p> */}
      <p></p>
      <button type="button" onClick={() => onButtonClick()}>{itemName} 상세 페이지로 가기</button>
      <p></p>
    </div>
  );
};

export default Card;
