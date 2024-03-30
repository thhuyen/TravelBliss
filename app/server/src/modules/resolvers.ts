import { resolver as createUserResolver } from "../modules/createUser/createUser-resolver";
import { resolver as getUserResolver } from "../modules/getUser/getUser-resolver";

export default [createUserResolver, getUserResolver]