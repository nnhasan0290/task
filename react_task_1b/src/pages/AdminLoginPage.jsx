import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MkdSDK from "../utils/MkdSDK";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import SnackBar from "../components/SnackBar";
import { GlobalContext, showToast } from "../globalContext";

const AdminLoginPage = () => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();

  const { dispatch } = React.useContext(AuthContext);
  const globalContext = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }) => {
    let sdk = new MkdSDK();
    //TODO
    try {
      const { role, token } = await sdk.login(email, password, "admin");
      const isAdmin = await sdk.check(role);
      if (isAdmin) {
        dispatch({
          type: "LOGIN",
          payload: {
            email: email,
            password: password,
            role: role,
            token: token,
          },
        });
        showToast(globalContext.dispatch, "LOGIN SUCCESSFUL");
        navigate("/admin/dashboard");
      } else {
        throw "wrong user or password";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-xs">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-8 pt-6 pb-8 mt-8 mb-4 bg-white rounded shadow-md"
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={`"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email?.message ? "border-red-500" : ""
            }`}
          />
          <p className="text-xs italic text-red-500">{errors.email?.message}</p>
        </div>

        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="******************"
            {...register("password")}
            className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password?.message ? "border-red-500" : ""
            }`}
          />
          <p className="text-xs italic text-red-500">
            {errors.password?.message}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            value="Sign In"
          />
        </div>
      </form>
      <SnackBar />
    </div>
  );
};

export default AdminLoginPage;
