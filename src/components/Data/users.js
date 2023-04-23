let newAccount = {};
if (localStorage.getItem("newAccount")) {
    newAccount = JSON.parse(localStorage.getItem("newAccount"));
}

export const users = [
    {
        email: "admin@gmail.com",
        password: "admin@123",
    },
    {
        email: "anhtran@gmail.com",
        password: "Anhtran@123",
    },
    newAccount,
];
