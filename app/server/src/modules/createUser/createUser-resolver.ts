import get from "lodash/get";
import createUserAPI from "./createUser-service";
import { CreateUserInput, CreateUserResponse } from "./createUser-type";

const resolver = {
  Mutation: {
    createUser: async (
      _: any,
      args: { createUserInput: CreateUserInput }
    ): Promise<CreateUserResponse> => {
      const { createUserInput } = args;
      const createUserService = new createUserAPI();
      const result = await createUserService.createUser(createUserInput);
      return get(result, "data.user");
    },
  },
};

export { resolver };
