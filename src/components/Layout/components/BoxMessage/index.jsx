import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";
import clsx from "clsx";

import stylesBox from "./BoxMessage.module.scss";
import classNames from "classnames/bind";

// const cxBox = classNames.bind(stylesBox);

function BoxMessage({ ...props }) {
    return (
        <div
            className={clsx(stylesBox.guideBox, {
                [stylesBox.bggreen]: props.bggreen,
                [stylesBox.bgblue]: props.bgblue,
            })}
        >
            <FontAwesomeIcon
                icon={faCircleInfo}
                className={clsx(stylesBox.iconInfor, {
                    [stylesBox.icblue]: props.icblue,
                })}
            />
            <span
                className={clsx("guide-text", {
                    [stylesBox.clgreen]: props.clgreen,
                    [stylesBox.clblue]: props.clblue,
                })}
            >
                {props.text}
            </span>
        </div>
    );
}

export default memo(BoxMessage);
