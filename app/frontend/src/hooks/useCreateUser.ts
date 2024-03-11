import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../apollo/mutations/createUser';

type User = {
  fullName: string,
  email: string,
  phoneNumber: string,
  password: string
}
export const useCreateUser = () => {

  const [addUser, { data, loading, error }] = useMutation(CREATE_USER);

  const createUser = async (payload: User) => {
    const { fullName, email, phoneNumber, password } = payload;
    await addUser({
      variables: {
        fullName,
        email,
        phoneNumber,
        password
      }
    })
  }

  return {
    createUser,
    data,
    loading,
    error
  }
}