import { routes } from "../constant";
import Congrats from "../pages/Congrats";
import Otp from "../pages/OTP/OTP";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home/Home";
import BookTickets from "../pages/BookTickets";

// don't need to login
const publicRoutes = [
    {
        path: routes.SIGNUP,
        component: Signup,
    },
    {
        path: routes.OTP,
        component: Otp,
    },
    {
        path: routes.CONGRATS,
        component: Congrats,
    },
    {
        path: routes.LOGIN,
        component: Login,
    },

];

// must login to view info
const privateRoutes = [
    {
        path: routes.HOME,
        component: Home,
    },
    {
        path: routes.BOOK_TICKETS,
        component: BookTickets,
    }
];

export { publicRoutes, privateRoutes };