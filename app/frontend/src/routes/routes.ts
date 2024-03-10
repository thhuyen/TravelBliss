import { route } from "../constant/route";
import Congrats from "../pages/Congrats";
import Otp from "../pages/OTP/OTP";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

// don't need to login
const publicRoutes = [
    {
        path: route.signUp,
        component: Signup,
    },
    {
        path: route.otp,
        component: Otp,
    },
    {
        path: route.congrats,
        component: Congrats,
    },
    {
        path: route.signIn,
        component: Signin,
    },

];

// must login to view info
const privateRoutes = [
    {
        path: route.home,
        component: "",
    }
];

export { publicRoutes, privateRoutes };