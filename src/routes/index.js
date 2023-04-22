// Layouts
// import { HeaderOnly } from "~/components/Layout";

import Signin from "~/pages/Signin";
import Signup from "~/pages/Signup";
import ForgetPassword from "~/pages/ForgetPassword";
import Vertification from "~/pages/Verification";
import Congrats from "~/pages/Signin/Congrats";
import VerificationPassword from "~/pages/VerificationPassword";
import Newpassword from "~/pages/Newpassword";
import SuccessNewPassword from "~/pages/SuccessNewPassword";

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
const privateRoutes = [];

export { publicRoutes, privateRoutes };
