import request from '../../utils/axios';
import { CheckUserInput } from "./checkUser-type";
import { ENDPOINTS } from "../../constant/endpoints";

class checkUserAPI {
  public checkUser = async (checkUserInput: CheckUserInput) => {
    return request.post(ENDPOINTS.CHECK_USER, checkUserInput)
  }
}

export default checkUserAPI;