import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGood, clearCart, getCountCart } from "../../store/cartSlice";
import {
    getGoodsLoadingStatus,
    getGoodsRedux,
    loadGoods
} from "../../store/goodsSlice";
import Search from "../main/Search";
import CategoriesList from "../main/CategoriesList";
import CardList from "../main/CardList";
import Pagination from "../main/Pagination";
import Cart from "../main/Cart";
import { MainPageContext } from "../../context/context";
import Loader from "../common/Loader";
import useLocalStorage from "../../hooks/useLocalStorageForCart";

const Main = () => {
    const dispatch = useDispatch();
    const isGoodLoading = useSelector(getGoodsLoadingStatus());
    const countCart = useSelector(getCountCart());
    const { getAccessInCart } = useContext(MainPageContext);
    const countItemOnPage = 4;
    const [goods, setGoods] = useState([]);
    const [cardsCategory, setCardsCategory] = useState();
    const [cardChoice, setCardsChoice] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [value, setValue] = useState("");
    const [order, setOrder] = useLocalStorage([], "order");

    useEffect(() => {
        dispatch(loadGoods());
    }, []);
    const goodsRedux = useSelector(getGoodsRedux());
    useEffect(() => {
        setGoods(goodsRedux);
        setCardsChoice(goodsRedux);
    }, [goodsRedux]);

    const handleCategoryItems = (cat) => {
        setCardsCategory(goods.filter((card) => card.category === cat));
        setCardsChoice(goods.filter((card) => card.category === cat));
        setActivePage(1);
    };

    const handleOnBack = () => {
        setCardsCategory();
        setCardsChoice(goodsRedux);
    };
    const handleOnSearch = (e) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        if (!cardsCategory) {
            setCardsChoice(
                goods.filter(
                    (elem) =>
                        elem.type
                            .split(" ")
                            .join("")
                            .toLowerCase()
                            .includes(
                                value.split(" ").join("").toLowerCase()
                            ) ||
                        elem.model
                            .split(" ")
                            .join("")
                            .toLowerCase()
                            .includes(value.split(" ").join("").toLowerCase())
                )
            );
        } else {
            setCardsChoice(
                cardsCategory.filter(
                    (elem) =>
                        elem.type
                            .split(" ")
                            .join("")
                            .toLowerCase()
                            .includes(
                                value.split(" ").join("").toLowerCase()
                            ) ||
                        elem.model
                            .split(" ")
                            .join("")
                            .toLowerCase()
                            .includes(value.split(" ").join("").toLowerCase())
                )
            );
        }
    }, [value]);
    const handleActivePage = (page) => {
        setActivePage(page);
    };
    const handleCountCart = (card) => {
        dispatch(addGood(card));
        setOrder([...order, card]);
    };
    const handleClearCart = () => {
        dispatch(clearCart());
        setOrder([]);
    };
    const countPage = cardsCategory
        ? Math.ceil(cardsCategory.length / countItemOnPage)
        : cardChoice.length !== 0
            ? Math.ceil(cardChoice.length / countItemOnPage)
            : goods
                ? Math.ceil(goods.length / countItemOnPage)
                : 0;

    const itemForPage = [...cardChoice];

    const pagination = (arr, num) => {
        return arr && arr.splice((num - 1) * countItemOnPage, countItemOnPage);
    };
    const itemOnPage = pagination(itemForPage, activePage);

    return !isGoodLoading
        ? (
            <div className="main py-3 px-3">
                <div className="d-flex justify-content-end align-items-baseline ">
                    <Search onSearch={handleOnSearch} value={value} />
                    <Cart
                        countCart={countCart}
                        getAccessInCart={getAccessInCart}
                        onClearCart={handleClearCart}
                    />
                </div>
                {itemOnPage && itemOnPage.length !== 0
                    ? (
                        <>
                            <div className="content">
                                <CategoriesList
                                    cardsInfo={goods}
                                    onCategoryItems={handleCategoryItems}
                                    onBack={handleOnBack}
                                />
                                <CardList
                                    cardsInfo={itemOnPage}
                                    onCountCart={handleCountCart}
                                />
                            </div>
                            <Pagination
                                countPage={countPage}
                                activePage={activePage}
                                onActivePage={handleActivePage}
                            />{" "}
                        </>
                    )
                    : (
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="row justify-content-md-center">
                                <div className="col-md-auto md-3 p-4 shadow mt-5 bg-white mb-5 rounded-4">
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex  flex-column mx-auto justify-content-center align-items-center mt-2">
                                            <h2>Товар не найден</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        )
        : (
            <Loader />
        );
};

export default Main;
