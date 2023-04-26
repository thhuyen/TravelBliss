import classNames from "classnames/bind";
import { memo } from "react";

import stylesBanner from "./Bannder.module.scss";
import DatePiker from "./DatePiker";

const cxBanner = classNames.bind(stylesBanner);

function Banner() {
    return (
        <div className={cxBanner("wrapper")}>
            <div className={cxBanner("search")}>
                <div>
                    <DatePiker />
                </div>
                <div>destination</div>
                <button>Search Trains</button>
            </div>
        </div>
    );
}

export default memo(Banner);
