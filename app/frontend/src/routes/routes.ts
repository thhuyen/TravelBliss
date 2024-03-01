import Congrats from "../pages/Congrats";
import Otp from "../pages/OTP/OTP";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

// don't need to login
const publicRoutes = [
    {
        path: "/signup",
        component: Signup,
    },
    {
        path: "/otp",
        component: Otp,
    },
    {
        path: "/congrats",
        component: Congrats,
    },
    {
        path: "/",
        component: Signin,
    },

];

// must login to view info
const privateRoutes = [
    {
        path: "/details",
        component: "",
    }
];

export { publicRoutes, privateRoutes };