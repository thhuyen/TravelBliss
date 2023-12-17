import Signup from "../pages/Signup";

// dont need to login
const publicRoutes = [
    {
        path: "/signup",
        component: Signup,
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