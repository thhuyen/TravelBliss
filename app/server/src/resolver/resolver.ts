import axios, { AxiosRequestConfig } from "axios";
import get from 'lodash/get'

const queries = {
    users: {
        api: "http://localhost:3000/users",
        query: {
            "operationName": "getUsers",
            "query": ` query {
                getUsers {
                    FullName
                    PhoneNumber
                    Email
                }
            }`
        }
    },
    popularDestination: {
        api: "http://localhost:3000/popularDestination",
        query: {
            "operationName": "getPopularDestinations",
            "query": ` query {
                getPopularDestinations {
                    Place
                    Url
                }
            }`
        }
    },
    FAQs: {
        api: "http://localhost:3000/FAQs",
        query: {
            "operationName": "getPopularDestinations",
            "query": ` query {
                getFAQs {
                    id
                    question
                    answer
                }
            }`
        }
    }
}

const headers = {
    "content-type": "application/json",
    "Authorization": "<token>"
};


const handleCallAPI = async (url: string, method: string, headers: object, data: any) => {
    try {
        return get(await axios({
            url: url,
            method: method,
            headers: headers,
            data: data
        }), "data");
    } catch (error) {
        throw new Error(`${error}`);
    }
};

export const resolvers = {
    Query: {
        getUsers: () => {
            return handleCallAPI(get(queries, "users.api"), 'get', headers, get(queries, "users.query"))
        },

        getPopularDestinations: () => {
            return handleCallAPI(get(queries, "popularDestination.api"), 'get', headers, get(queries, "popularDestination.query"))

        },

        getFAQs: () => {
            return handleCallAPI(get(queries, "FAQs.api"), 'get', headers, get(queries, "FAQs.query"))
        }
    }
}
