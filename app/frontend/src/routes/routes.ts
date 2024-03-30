import { routes } from "../constant/route";
import Congrats from "../pages/Congrats";
import Otp from "../pages/OTP/OTP";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
        component: "",
    }
];

export { publicRoutes, privateRoutes };