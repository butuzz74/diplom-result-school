import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, logOut } from "../../store/usersSlice";
import { clearListOrder } from "../../store/orderSlice";
import Avatar from "./Avatar";
import NavigationLink from "./NavigationLink";

const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(getIsLoggedIn());
    const handleLogOut = () => {
        dispatch(logOut());
        dispatch(clearListOrder());
        history.push("/");
    };

    return (
        <div className="navbar">
            <div className="navheader text-white">
                <p> OOO Системы отображения информации </p>
            </div>
            <div className="navline">
                <ul className="nav nav-pills mt-2 d-flex justify-content-center me-5">
                    <li className="nav-item">
                        <NavigationLink path={"/"}>
                            На главную страницу
                        </NavigationLink>
                    </li>
                    <li className="nav-item">
                        <NavigationLink path={"/paymentAndDelivery"}>
                            Оплата и доставка
                        </NavigationLink>
                    </li>
                    <li className="nav-item">
                        <NavigationLink path={"/aboutUs"}>О нас</NavigationLink>
                    </li>
                    <li className="nav-item">
                        <NavigationLink path={"/contactInfo"}>
                            Контакты
                        </NavigationLink>
                    </li>
                    <li className="nav-item">
                        <NavigationLink path={"/signin"}>
                            Войти/Зарегистрироваться
                        </NavigationLink>
                    </li>
                </ul>
            </div>
            {currentUser
                ? (
                    <Avatar
                        avatarName={currentUser.nick.substring(0, 1).toUpperCase()}
                        logOut={handleLogOut}
                    />
                )
                : null}
        </div>
    );
};

export default NavBar;
