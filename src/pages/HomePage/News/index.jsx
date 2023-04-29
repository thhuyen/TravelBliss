import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./News.module.scss";

const cxNews = classNames.bind(styles);

function News() {
    return (
        <div className={cxNews("wrapper-authen")}>
            <div className={cxNews("inner-authen")}>
                <div className={cxNews("inner-left")}>
                    <h2 className={cxNews("header")}>Our latest news</h2>
                    <div className={cxNews("content")}>
                        <p className={cxNews("date")}>02 April 2023</p>
                        <p>
                            In addition to the daily running of the North-South Reunification train,
                            from April 28th to May 3rd, the railway will increase 52 passenger
                            trains, focusing on tourist destinations such as Da Nang, Vinh, Quy
                            Nhon, and Nha Trang.
                        </p>
                        <p>
                            The demand for travel during the holiday period is high, so in the
                            Northern region, 22 train groups will operate on routes from Hanoi to 6
                            provinces and cities, and vice versa. The route with the most additional
                            trains is Hanoi-Vinh with 9 trains; Dong Hoi has 6 trains; Hai Phong has
                            three trains, and Thanh Hoa has two more trains. Two other routes from
                            Hanoi to Lao Cai and Da Nang will each have an additional train during
                            the holiday
                        </p>

                        <span className={cxNews("btn")}>
                            READ MORE{" "}
                            <FontAwesomeIcon className={cxNews("icon")} icon={faArrowRight} />
                        </span>
                    </div>
                </div>
                <img
                    className={cxNews("inner-right")}
                    alt="img-signup"
                    src="https://i1-vnexpress.vnecdn.net/2023/03/11/khach-di-tau-jpeg-3643-1625722-2361-8120-1678510955.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=Qzkbnik_CszsrIzXso-kPw"
                />
            </div>
        </div>
    );
}

export default News;
