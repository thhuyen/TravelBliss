import classNames from "classnames/bind";
import { memo } from "react";

import stylesBanner from "./Bannder.module.scss";

const cxBanner = classNames.bind(stylesBanner);

function Banner() {
    return (
        <div className={cxBanner("wrapper")}>
            <div className={cxBanner("search")}></div>
        </div>
    );
}

export default memo(Banner);
