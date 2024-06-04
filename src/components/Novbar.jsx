import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import "../css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { LuTrash2 } from "react-icons/lu";
import { delteCart } from "../features/counterSlice";
import { Link } from "react-router-dom";
function Novbar() {
  let { value, totalvalue } = useSelector((state) => state.counter);
  let dipetch = useDispatch();
  let price = 125.0;
  return (
    <nav className="nav">
      <div className="nav__previe">
        <h4 className="nav__title">
          <Link to="/">
            {" "}
            <img className="nav__name-title" src="/logo.svg" alt="" />
          </Link>
        </h4>
        <ul className="nav__list">
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            {" "}
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="nav-avatar-cart">
        <button className="nav__cart">
          <CiShoppingCart className="cart-btn" />
          <span className="cart__value">{value}</span>
        </button>
        <div class="dropdown">
          <button class="dropbtn">
            <img width="50" height="50" src="/image-avatar.png" alt="" />
          </button>
          <div class="dropdown-content">
            <h5>Cart</h5>
            <hr />
            {(value == 0 && (
              <div className="nav__cart__avatar__noproduct">
                <h6>You don't have any products yet</h6>
              </div>
            )) || (
              <div className="nav__cart__avatar__yesproduct">
                <img src="/image-product-1.jpg" width="50" height="50" alt="" />
                <div className="nav__cart__price">
                  <p>Fall Limited Edition Sneakers</p>
                  <span>
                    ${price}x{value} <b>${price * value}</b>
                  </span>
                </div>
                <button
                  onClick={() => {
                    dipetch(delteCart());
                  }}
                  className="trash"
                >
                  <LuTrash2 className="cart-btn main__btn " />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Novbar;
