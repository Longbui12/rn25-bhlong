import React from "react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const MAX_STAR = 5;

function Rating() {
  const [star, setStar] = useState(4);
  const arrStar = [1, 2, 3, 4, 5];
  const renderStar = ()=> {
    let result = []
    for (let index = 0; index < 5; index++) {
        result.push(1)
        
    }
    return result
  };
  return (
    <div>
        {renderStar()}
    </div>
  )} 