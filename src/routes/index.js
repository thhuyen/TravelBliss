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
import Home from "~/pages/HomePage";
import FirstStep from "~/pages/Order/FirstStep";
import SecondStep from "~/pages/Order/SecondStep";
import HomePage from "~/pages/HomePage";

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
    {
        path: "/homepage",
        component: HomePage,
    },
];

// must login to view info
const privateRoutes = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/firststep",
        component: FirstStep,
    },
    {
        path: "/secondstep",
        component: SecondStep,
    },
];

export { publicRoutes, privateRoutes };
