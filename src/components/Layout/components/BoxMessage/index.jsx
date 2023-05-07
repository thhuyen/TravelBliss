import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

import classNames from "classnames/bind";
import stylesBox from "./BoxMessage.module.scss";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const cxBox = classNames.bind(stylesBox);

function BoxMessage({ text }) {
    return (
        <div className={cxBox("guide-box")}>
            <FontAwesomeIcon icon={faCircleInfo} className={cxBox("icon-infor")} />
            <span className={cxBox("guide-text")}>{text}</span>
        </div>
    );
}

export default memo(BoxMessage);
