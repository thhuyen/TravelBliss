import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Destination.module.scss";
import React from "react";
const destination = [
    {
        id: 1,
        img: "https://dulichkhampha24.com/wp-content/uploads/2020/06/cau-vang-da-nang-5-1.jpg",
        title: "Da Nang",
    },
    {
        id: 2,
        img: "https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-nen-Ha-Noi.jpg",
        title: "Ha Noi",
    },
    {
        id: 3,
        img: "https://pix10.agoda.net/geo/city/2679/1_2679_02.jpg?ca=6&ce=1&s=1920x822",
        title: "Nha Trang",
    },
    {
        id: 4,
        img: "https://i1-dulich.vnecdn.net/2022/06/06/1IMG-5318-5102-1654526021.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=3W45y7igU_FW7jW-ugDyLA",
        title: "Da Lat",
    },
    {
        id: 5,
        img: "https://gonatour.vn/vnt_upload/news/01_2021/ve_dep_eo_gio_quy_nhon_gonatour.jpg",
        title: "Quy Nhon",
    },
    {
        id: 6,
        img: "https://bcp.cdnchinhphu.vn/uploaded/1/truonggiangthanh/2021_10_22/tth_NHCP.jpg",
        title: "Hue",
    },
];
const cxDes = classNames.bind(styles);
function Destination() {
    return (
        <div className={cxDes("wrapper")}>
            <div className={cxDes("header")}>
                <h2 className={cxDes("title")}>Popular Destination</h2>
                <span className={cxDes("btn")}>
                    View All <FontAwesomeIcon className={cxDes("icon")} icon={faAngleRight} />
                </span>
            </div>
            <div className={cxDes("cities")}>
                {destination.map((city) => (
                    <div className={cxDes("city")} key={city.id}>
                        <div className={cxDes("bgoverlay")}></div>
                        <img className={cxDes("img")} src={city.img} alt={city.title} />
                        <span className={cxDes("content")}>{city.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destination;
