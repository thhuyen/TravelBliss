import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import classNames from "classnames/bind";
import { memo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import stylesBanner from "./Banner.module.scss";
import Datepicker from "./DatePiker";

const cxBanner = classNames.bind(stylesBanner);
const useStyles = makeStyles({
    label: {
        color: "red",
    },
});

function Banner() {
    const { idUser } = useParams();
    const navigate = useNavigate();

    const classes = useStyles();
    const [departureCity, setDepartureCity] = useState("");
    const [arrivalCity, setArrivalCity] = useState("");

    const cities = [
        "Ba Ria-Vung Tau",
        "Binh Dinh",
        "Binh Duong",
        "Can Tho",
        "Da Nang",
        "Hai Phong",
        "Hanoi",
        "Sai Gon",
    ];
    const handleChangeDeparture = (e) => {
        setDepartureCity(e.target.value);
    };
    const handleChangeArrival = (e) => {
        if (departureCity === e.target.value) {
            alert("You should choose another arrival city");
        } else setArrivalCity(e.target.value);
    };
    const handleSwich = () => {
        setDepartureCity(arrivalCity);
        setArrivalCity(departureCity);
    };

    const goToOrder = () => {
        navigate(`/order/firststep/${idUser}`, { replace: true });
    };
    return (
        <div className={cxBanner("wrapper")}>
            <div className={cxBanner("search")}>
                {/* calendar */}
                <div className={cxBanner("date")}>
                    <Datepicker />
                </div>
                {/*destination  */}
                <div className={cxBanner("destination")}>
                    {/* departure */}
                    <FormControl
                        className={cxBanner("departure")}
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                    >
                        {/* <InputLabel className={cxBanner("input")} id="">
                            Enter departure city...
                        </InputLabel> */}
                        <Select
                            className={cxBanner("select")}
                            labelId="departure"
                            id="departure"
                            value={departureCity}
                            label="departureCity"
                            onChange={handleChangeDeparture}
                        >
                            {cities.map((item, index) => {
                                return (
                                    <MenuItem className={cxBanner("menu")} key={index} value={item}>
                                        {item}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        {/* arrival */}
                    </FormControl>
                    <FontAwesomeIcon
                        className={cxBanner("swich-btn")}
                        icon={faArrowRightArrowLeft}
                        onClick={handleSwich}
                    />

                    <FormControl className={cxBanner("arrival")} variant="standard">
                        {/* <InputLabel className={cxBanner("input")}>Enter arrival city...</InputLabel> */}
                        <Select
                            className={cxBanner("select")}
                            labelId="arrival"
                            id="arrival"
                            value={arrivalCity}
                            label="arrivalCity"
                            onChange={handleChangeArrival}
                        >
                            {cities.map((item, index) => {
                                return (
                                    <MenuItem className={cxBanner("menu")} key={index} value={item}>
                                        {item}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>

                <button className={cxBanner("btn", "button")} onClick={goToOrder}>
                    Search Trains
                </button>
            </div>
        </div>
    );
}

export default memo(Banner);
