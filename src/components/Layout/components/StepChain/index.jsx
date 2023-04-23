import classNames from "classnames/bind";
import { memo } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import stylesStep from "./StepChain.module.scss";

const cxStep = classNames.bind(stylesStep);
function StepChain({ route, done1, done2, active1, active2 }) {
    return (
        <div className={cxStep("road-map")}>
            <Link to={route}>
                <button className={cxStep("btn-back")}>Back</button>
            </Link>

            <div className={cxStep("step-chain")}>
                <div className={cxStep("step")}>
                    {done1 ? (
                        <FontAwesomeIcon icon={faCircleCheck} className={cxStep("icon-done")} />
                    ) : (
                        <div
                            className={clsx(stylesStep.number, {
                                [stylesStep.active1]: active1,
                            })}
                        >
                            1
                        </div>
                    )}
                    <div>
                        <p className={cxStep("sequence-text")}>First step</p>
                        <p className={cxStep("action-text")}>Choose your route</p>
                    </div>
                    <div
                        className={cxStep(stylesStep.line, {
                            [stylesStep.done1]: done1,
                        })}
                    ></div>
                </div>

                <div className={cxStep("step", "step-after")}>
                    {done2 ? (
                        <FontAwesomeIcon icon={faCircleCheck} className={cxStep("icon-done")} />
                    ) : (
                        <div className={cxStep("number")}>2</div>
                    )}
                    <div>
                        <p className={cxStep("sequence-text")}>Second step</p>
                        <p className={cxStep("action-text")}>Choose your seat</p>
                    </div>
                    <div
                        className={clsx(stylesStep.line, {
                            [stylesStep.done2]: done2,
                        })}
                    ></div>
                </div>

                <div className={cxStep("step", "step-after")}>
                    <div className={cxStep("number")}>3</div>
                    <div>
                        <p className={cxStep("sequence-text")}>Third step</p>
                        <p className={cxStep("action-text")}>Passenger Info</p>
                    </div>
                    <div className={cxStep("line")}></div>
                </div>

                <div className={cxStep("step", "step-after")}>
                    <div className={cxStep("number")}>4</div>
                    <div>
                        <p className={cxStep("sequence-text")}>Final step</p>
                        <p className={cxStep("action-text")}>Payment</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(StepChain);
