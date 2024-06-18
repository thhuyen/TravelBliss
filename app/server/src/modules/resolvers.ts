import { resolver as createUserResolver } from "../modules/createUser/createUser-resolver";
import { resolver as getUserResolver } from "../modules/getUser/getUser-resolver";
import { resolver as checkUserResolver } from "./checkUser/checkUser-resolver";

export default [createUserResolver, getUserResolver, checkUserResolver]