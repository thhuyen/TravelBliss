import request from '../../utils/axios';

import { ENDPOINTS } from "../../constant/endpoints";
import { GetUserInput } from './getUser-type';

class getUserAPI {
  public getUser = async (getUserInput: GetUserInput) => {
    return request.get(`${ENDPOINTS.GET_USER}/${getUserInput.id}`)
  }
}

export default getUserAPI;