import get from "lodash/get";
import createUserAPI from "./checkUser-service";
import { CheckUserInput } from "./checkUser-type";

const resolver = {
  Mutation: {
    checkUser: async (
      _: any,
      args: { checkUserInput: CheckUserInput }
    ): Promise<{}> => {
      const { checkUserInput } = args;
      const checkUserService = new createUserAPI();
      const result = await checkUserService.checkUser(checkUserInput);
      return get(result, "data");
    },
  },
};

export { resolver };
