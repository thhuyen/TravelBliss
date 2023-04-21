// Layouts
// import { HeaderOnly } from "~/components/Layout";

import Signin from "~/pages/Signin";
import Signup from "~/pages/Signup";
import ForgetPassword from "~/pages/ForgetPassword";

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
];

// must login to view info
const privateRoutes = [];

export { publicRoutes, privateRoutes };
