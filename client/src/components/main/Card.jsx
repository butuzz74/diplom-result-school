import React from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";
import NavigationLink from "../common/NavigationLink";

const Card = ({ card, onCountCart, path, onDelete }) => {
    return (
        card && (
            <div className="col d-flex flex-column justify-content-between align-items-stretch">
                <div className="card h-100 d-flex flex-column justify-content-between align-items-stretch ">
                    <div className="card-image">
                        <img
                            src={card.image}
                            className="card-img-top"
                            alt="Projector"
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Brand: {card.brand}</h5>
                        <h5 className="card-title">Type: {card.type}</h5>
                        <h5 className="card-title">Model: {card.model}</h5>
                        <p className="card-text">Price: {card.price}</p>

                        {path !== "/cardaddgood"
                            ? (
                                <>
                                    <Button className={"btn btn-success"}>
                                        <NavigationLink path={`/${card._id}`}>
                                        Посмотреть
                                        </NavigationLink>
                                    </Button>
                                    <Button
                                        className={"btn btn-success mt-2"}
                                        onClick={() => onCountCart(card)}
                                    >
                                    Добавить в корзину
                                    </Button>
                                </>
                            )
                            : (
                                <>
                                    <Button className={"btn btn-success"}>
                                        <NavigationLink
                                            path={`/cardeditgood/${card._id}`}
                                        >
                                        Редактировать
                                        </NavigationLink>
                                    </Button>
                                    <Button
                                        className={"btn btn-success mt-2"}
                                        onClick={() => onDelete(card._id)}
                                    >
                                    Удалить
                                    </Button>
                                </>
                            )}
                    </div>
                </div>
            </div>
        )
    );
};
Card.propTypes = {
    card: PropTypes.object,
    onCountCart: PropTypes.func,
    onDelete: PropTypes.func,
    path: PropTypes.string
};
export default Card;
