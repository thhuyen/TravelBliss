import { routes } from "../constant/routes";
import Congrats from "../pages/Congrats";
import Otp from "../pages/OTP/OTP";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home/Home";

// don't need to login
const publicRoutes = [
    {
        path: routes.signUp,
        component: Signup,
    },
    {
        path: routes.otp,
        component: Otp,
    },
    {
        path: routes.congrats,
        component: Congrats,
    },
    {
        path: routes.signIn,
        component: Login,
    },

];

// must login to view info
const privateRoutes = [
    {
        path: routes.home,
        component: Home,
    }
];

export { publicRoutes, privateRoutes };