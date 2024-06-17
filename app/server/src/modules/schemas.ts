import { typeDefs as createUserTypeDefs } from "../modules/createUser/createUser-schema";
import { typeDefs as getUserTypeDefs } from "../modules/getUser/getUser.schema";
import { typeDefs } from "./checkUser/checkUser-schema";
export default [createUserTypeDefs, getUserTypeDefs, typeDefs]
