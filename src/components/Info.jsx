import React, { useEffect, useState } from "react";
import "../css/info.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calculatAmout } from "../features/counterSlice";
import { LuTrash2 } from "react-icons/lu";
function Info() {
  const { value, totalvalue } = useSelector((state) => state.counter);
  let [counter, setCounter] = useState(1);
  let [img, setImg] = useState(1);
  const dispatch = useDispatch();
  let price = 125.0;
  return (
    <main className="main">
      <div className="main__img">
        <p className="main__img">
          <img
            className="main__img__previe"
            src={`/image-product-${img}.jpg`}
            width="450"
            height="450"
            alt=""
          />
          <ul className="main-list-img">
            <li className="li">
              <button
                onClick={() => {
                  setImg(1);
                }}
                className="img-btn"
                href="#"
              >
                <img
                  width="88"
                  height="88"
                  src={`/image-product-1.jpg`}
                  className=""
                  alt=""
                />
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setImg(2);
                }}
                className="img-btn"
                href="#"
              >
                <img
                  width="88"
                  height="88"
                  src={`/image-product-2.jpg`}
                  className=""
                  alt=""
                />
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setImg(3);
                }}
                className="img-btn"
                href="#"
              >
                <img
                  width="88"
                  height="88"
                  src={`/image-product-3.jpg`}
                  className=""
                  alt=""
                />
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setImg(4);
                }}
                className="img-btn"
                href="#"
              >
                <img
                  width="88"
                  height="88"
                  src={`/image-product-4.jpg`}
                  className=""
                  alt=""
                />
              </button>
            </li>
          </ul>
        </p>
      </div>
      <div className="main__info">
        <span className="main__company">Sneaker Company</span>
        <h1 className="main__title">Fall Limited Edition Sneakers</h1>
        <p className="main__descriptin">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="main__div-price">
          <p className="main__price">${price}</p>
          <span className="main__sale">50%</span>
        </div>
        <p className="main__nosale">$250.00</p>
        <div className="main__add">
          <div className="main__btn-info">
            <button
              onClick={() => {
                // dispatch(decrement());
                setCounter(counter - 1);
              }}
              className="main__btn minus"
              disabled={counter == 1 ? true : false}
            >
              -
            </button>
            <p className="main__amout">{counter}</p>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
              className="main__btn plus"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              dispatch(calculatAmout(counter));
              setCounter(1);
            }}
            className="main__btn main__addCart-btn"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default Info;
