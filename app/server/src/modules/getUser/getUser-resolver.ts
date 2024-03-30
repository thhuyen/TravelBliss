import get from "lodash/get";
import { GetUserInput, GetUserResponse } from "./getUser-type";
import getUserAPI from "./getUser.service";

const resolver = {
  Query: {
    getUser: async (
      _: any,
      args: { getUserInput: GetUserInput }
    ): Promise<GetUserResponse | null> => {
      const { getUserInput } = args;
      try {
        const getUserService = new getUserAPI();
        const result = await getUserService.getUser(getUserInput);
        return get(result, "data");
      } catch (error) {
        console.log("Error: ", error);
      }
      return null;
    },
  },
};

export { resolver };
