import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";

const Icon = ({ id, content, className, role, onClick, children, style }) => {
    return (
        <>
            <i
                className={className}
                data-tooltip-id={id}
                data-tooltip-content={content}
                role={role}
                onClick={onClick}
                style={ style }
            >
                {children}
            </i>
            <Tooltip
                id={id}
                style={{ backgroundColor: "#6610f2", zIndex: "1000" }}
            />
        </>
    );
};
Icon.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    role: PropTypes.string,
    content: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    style: PropTypes.object
};
export default Icon;
