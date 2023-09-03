import React from "react";
import Icon from "../common/Icon";

const SocialNets = () => {
    return (
        <div className="d-flex justify-content-between">
            <Icon
                className={"bi bi-facebook mx-3"}
                id={"facebook"}
                content={"Go to our Facebook"}
                role={"button"}
            />
            <Icon
                className={"bi bi-twitter mx-3"}
                id={"twitter"}
                content={"Go to our Twitter!"}
                role={"button"}
            />
            <Icon
                className={"bi bi-instagram mx-3"}
                id={"instagram"}
                content={"Go to our Instagram!"}
                role={"button"}
            />
        </div>
    );
};

export default SocialNets;
