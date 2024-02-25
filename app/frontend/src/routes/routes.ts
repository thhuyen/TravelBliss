import OTP from "../pages/OTP/OTP";
import Signup from "../pages/Signup";

// don't need to login
const publicRoutes = [
    {
        path: "/signup",
        component: Signup,
    },
    {
        path: "/otp",
        component: OTP,
    }
];

// must login to view info
const privateRoutes = [
    {
        path: "/details",
        component: "",
    }
];

export { publicRoutes, privateRoutes };