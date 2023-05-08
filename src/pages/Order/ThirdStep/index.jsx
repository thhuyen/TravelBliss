import classNames from "classnames/bind";

import StepChain from "~/components/Layout/components/StepChain";
import styles from "./ThirdStep.module.scss";
import BoxMessage from "~/components/Layout/components/BoxMessage";
import FooterMini from "~/components/Layout/components/FooterMini";
import Header from "~/components/Layout/components/Header";

const cx = classNames.bind(styles);

function ThirdStep() {
    return (
        <div>
            <Header />
            <div className={cx("space")}></div>
            <StepChain route="/order/secondstep" done1={true} done2={true} active3={true} />

            <div className={cx("message")}>
                <BoxMessage
                    text="Please fill fully, exactly all the information about the passenger(s) as in your paper, including: Full Name, ID Number or Passport Number, Day of Birth. For the safety, transparency during buying ticket process, this information will be checked by the ticket inspector before getting aboard according to Travel Bliss's regulations."
                    bgblue={true}
                    clblue={true}
                    icblue={true}
                />
            </div>

            <div className={cx("wrapper")}>
                <div className={cx("inner-left")}>
                    <p>
                        Please provide a valid email address where we will send your electronic
                        tickets.
                    </p>
                    <input id="autofill" type="checkbox" className={cx("autofill-checkbox")} />
                    <label htmlFor="autofill">This ticket is for me</label>
                    <br />
                    <input
                        type="text"
                        placeholder="012345678"
                        className={cx("phone-input")}
                    ></input>

                    <h3 class={cx("title")}>Passenger(s) information</h3>

                    <div className={cx("infor-box")}>
                        <div className={cx("seat")}>Coach No.2, Seat No.26</div>

                        <table>
                            <tr>
                                <td>Passenger Type</td>
                                <td>Day of birth</td>
                            </tr>

                            <tr>
                                <td>
                                    <select>
                                        <option value="adult" selected>
                                            Adult
                                        </option>
                                        <option value="children">Children</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="date" />
                                </td>
                            </tr>

                            <tr>
                                <td>Identification number</td>
                            </tr>

                            <tr>
                                <td>
                                    <select>
                                        <option value="idnumber" selected>
                                            ID number
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" placeholder="076528000011" />
                                </td>
                            </tr>

                            <tr>
                                <td>Fullname</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <input
                                        className={cx("fullname")}
                                        type="text"
                                        placeholder="Tran Anh"
                                    />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className={cx("inner-right")}></div>
            </div>

            <FooterMini />
        </div>
    );
}

export default ThirdStep;
