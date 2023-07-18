import axiosApi from "./Api";

interface IRegisterBody {
  email: string;
  password: string;
}

const register = (credentials: IRegisterBody) => axiosApi.post("auth/register", credentials);

export default { register };
