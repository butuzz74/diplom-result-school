import React from "react";
import PropTypes from "prop-types";
import Icon from "../common/Icon";

const Cart = ({ countCart, getAccessInCart, onClearCart }) => {
    return (
        <div
            className="nav-link text-decoration-underline"
            style={{ color: "white" }}
        >
            <Icon
                className={countCart === 0 ? "bi bi-cart" : "bi bi-cart-fill"}
                style={{ color: "white" }}
                role={"button"}
                onClick={getAccessInCart}
            >
                Cart {countCart}
            </Icon>
            <Icon
                className={
                    countCart === 0
                        ? "bi bi-trash ms-1"
                        : "bi bi-trash-fill ms-1"
                }
                id={"trash"}
                content={"Очистить корзину!"}
                onClick={onClearCart}
                role={"button"}
            />
        </div>
    );
};
Cart.propTypes = {
    countCart: PropTypes.number,
    getAccessInCart: PropTypes.func,
    onClearCart: PropTypes.any
};
export default Cart;
