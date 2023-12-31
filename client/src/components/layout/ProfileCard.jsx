import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrentUser, getIsLoggedIn } from "../../store/usersSlice";

const ProfileCard = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUserExisting = useSelector(getIsLoggedIn());
    useEffect(() => {
        if (currentUserExisting === null) {
            dispatch(getCurrentUser());
        }
    }, []);
    const currentUserNewExisting = useSelector(getIsLoggedIn());
    const currentUser = currentUserExisting || currentUserNewExisting;
    return (
        currentUser && (
            <>
                <div className="login d-flex justify-content-center align-items-center">
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto md-3 p-4 shadow mt-5 bg-white mb-5 rounded-4">
                            <div className="d-flex justify-content-center">
                                <div className="d-flex  flex-column mx-auto justify-content-center align-items-center mt-2">
                                    <div className="mb-2">
                                        <h2>Ваш профиль</h2>
                                    </div>
                                    <div
                                        className="btn btn-primary mb-2"
                                        style={{ width: "100%" }}
                                        role="button"
                                        onClick={() => {
                                            history.push("/edit");
                                        }}
                                    >
                                        Изменить данные
                                    </div>
                                    <div
                                        className="btn btn-primary mb-2"
                                        style={{ width: "100%" }}
                                        role="button"
                                        onClick={() => {
                                            history.push("/orderslist");
                                        }}
                                    >
                                        Посмотреть список заказов
                                    </div>
                                    {currentUser.admin && (
                                        <div
                                            className="btn btn-primary mb-2"
                                            style={{ width: "100%" }}
                                            role="button"
                                            onClick={() => {
                                                history.push("/cardaddgood");
                                            }}
                                        >
                                            Войти в панель администратора
                                        </div>
                                    )}
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default ProfileCard;
