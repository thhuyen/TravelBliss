// Layouts
// import { HeaderOnly } from "~/components/Layout";

import Signin from "~/pages/Signin";
import Signup from "~/pages/Signup/Main";
import ForgotPassword from "~/pages/ForgetPassword/Main";

import VerificationPassword from "~/pages/ForgetPassword/VerificationPassword";
import Newpassword from "~/pages/ForgetPassword/Newpassword";
import SuccessNewPassword from "~/pages/ForgetPassword/SuccessNewPassword";

import Vertification from "~/pages/Signup/Verification";
import Congrats from "~/pages/Signup/Congrats";
import Home from "~/pages/HomePage";
import FirstStep from "~/pages/Order/FirstStep";
import SecondStep from "~/pages/Order/SecondStep";
import HomePage from "~/pages/HomePage";
import PassengerInfo from "~/pages/Order/ThirdStep/PassengerInfo";
import Confirmation from "~/pages/Order/ThirdStep/Confirmation";
import Success from "~/pages/Order/Success";
import History from "~/pages/History";
import TicketDetail from "~/pages/Order/TicketDetail";
import FourthStep from "~/pages/Order/FourthStep";

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
        path: "/forgot",
        component: ForgotPassword,
    },

    {
        path: "/signup/vertification",
        component: Vertification,
    },
    {
        path: "/signup/congrats",
        component: Congrats,
    },
    {
        path: "/forgot/verificationpassword/:idUser",
        component: VerificationPassword,
    },
    {
        path: "/forgot/newpassword/:idUser",
        component: Newpassword,
    },
    {
        path: "/forgot/successnewpassword",
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
        path: "/home/:idUser",
        component: Home,
    },
    {
        path: "/order/firststep/:idUser",
        component: FirstStep,
    },
    {
        path: "/order/secondstep/:idUser",
        component: SecondStep,
    },
    {
        path: "/order/thirdstep/passengerinfo/:idUser",
        component: PassengerInfo,
    },
    {
        path: "/order/thirdstep/confirmation/:idUser",
        component: Confirmation,
    },
    {
        path: "/order/fourthstep/:id",
        component: FourthStep,
    },
    {
        path: "/order/success/:id",
        component: Success,
    },
    {
        path: "/history",
        component: History,
    },
    {
        path: "/order/ticketdetail",
        component: TicketDetail,
    },
];

export { publicRoutes, privateRoutes };
