import axios from 'axios';
import { endpoints } from "../../constant/endpoints";
import { CreateUserInput } from "./createUser-type";

class createUserAPI {
  public createUser = async (createUserInput: CreateUserInput) => {
    return axios({
      url: endpoints.CREATE_USER,
      baseURL: 'https://250d8.wiremockapi.cloud',
      method: 'post',
      data: createUserInput
    });
  }
}

export default createUserAPI;