import axiosApi from "./Api";

interface IRegisterBody {
  email: string;
  password: string;
}

const register = (credentials: IRegisterBody) => axiosApi.post("auth/register", credentials);

interface ILoginBody {
  email: string;
  password: string;
}

const login = (credentials: ILoginBody) => axiosApi.post("auth/login", credentials);

export default { register, login };
