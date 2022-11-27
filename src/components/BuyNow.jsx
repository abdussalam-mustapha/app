import React from 'react'
import img from "../img/z.jpg"
import { useState, useEffect } from 'react'

const BuyNow = () => {

    const [count, setCount] = useState(0)

    const addToCart = () => {
        setCount(count + 1)
    }

    const RemoveFromCart = () => {
        setCount(count - 1)
    }

    useEffect(() => {
       console.log(count) 
    }, [])


    return (
        <div className="buySection">
            <h1>Latest Stocks</h1>
            <div className="buySection-main">
                <div className="buy-now">
                    <img src={img} alt="" />
                    <button onClick={addToCart}>Add ( + )</button>
                    {count}
                    <button onClick={RemoveFromCart}>Remove ( - )</button>
                </div>
                <div className="buy-now">
                    <img src={img} alt="" />
                    <button onClick={addToCart}>Add ( + )</button>
                    {count}
                    <button onClick={RemoveFromCart}>Remove ( - )</button>
                </div>
                <div className="buy-now">
                    <img src={img} alt="" />
                    <button onClick={addToCart}>Add ( + )</button>
                    {count}
                    <button onClick={RemoveFromCart}>Remove ( - )</button>
                </div>
            </div>
        </div>
    )
}

export default BuyNow
