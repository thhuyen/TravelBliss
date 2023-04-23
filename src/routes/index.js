// Layouts
// import { HeaderOnly } from "~/components/Layout";

import Signin from "~/pages/Signin";
import Signup from "~/pages/Signup/Main";
import ForgetPassword from "~/pages/ForgetPassword/Main";

import VerificationPassword from "~/pages/ForgetPassword/VerificationPassword";
import Newpassword from "~/pages/ForgetPassword/Newpassword";
import SuccessNewPassword from "~/pages/ForgetPassword/SuccessNewPassword";

import Vertification from "~/pages/Signup/Verification";
import Congrats from "~/pages/Signup/Congrats";
import Home from "~/pages/Home";

// dont need to login
const publicRoutes = [
    {
        path: "/",
        component: Signin,
    },
    {
        path: "/signup",
        component: Signup,
    },
    {
        path: "/forget",
        component: ForgetPassword,
    },

    {
        path: "/vertification",
        component: Vertification,
    },
    {
        path: "/congrats",
        component: Congrats,
    },
    {
        path: "/verificationpassword",
        component: VerificationPassword,
    },
    {
        path: "/newpassword",
        component: Newpassword,
    },
    {
        path: "/successnewpassword",
        component: SuccessNewPassword,
    },
];

// must login to view info
const privateRoutes = [
    {
        path: "/home",
        component: Home,
    },
];

export { publicRoutes, privateRoutes };
