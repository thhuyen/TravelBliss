import request from '../../utils/axios';
import { CreateUserInput } from "./createUser-type";
import { ENDPOINTS } from "../../constant/endpoints";

class createUserAPI {
  public createUser = async (createUserInput: CreateUserInput) => {
    return request.post(ENDPOINTS.CREATE_USER, createUserInput)
  }
}

export default createUserAPI;