// Layouts
// import { HeaderOnly } from "~/components/Layout";

import Signin from "~/pages/Signin";

// dont need to login
const publicRoutes = [
    {
        path: "/",
        component: Signin,
    },
];

// must login to view info
const privateRoutes = [];

export { publicRoutes, privateRoutes };
