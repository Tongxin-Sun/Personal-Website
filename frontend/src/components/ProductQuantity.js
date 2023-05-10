import React, { useState }from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

function ProductQuantity() {
    const [ number, setNumber ] = useState(0);
    const toIncrease = () => {number === 10 ? alert("You have reached the maximum number of items that you can order!"): setNumber(number + 1)}
    const toDecrease = () => {number === 0 ? alert("Oh, a number < 0 is not valid!"): setNumber(number - 1)}
    return (
        <div>
            <AiOutlinePlusCircle onClick={toIncrease}/>
            <span>{number}</span>
            <AiOutlineMinusCircle onClick={toDecrease}/>
        </div>
    );
}

export default ProductQuantity;