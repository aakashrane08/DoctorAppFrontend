import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { setLoading, setToken } from "../../reducer/slices/authSlice";
import { setUser } from "../../reducer/slices/profileSlice";

const { PATIENT_REGISTER_API, DOCTOR_REGISTER_API, LOGIN_API } = endpoints;

export const doctorSignUp = (
  firstName,
  lastName,
  email,
  password,
  specialization,
  qualification,
  navigate
) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", DOCTOR_REGISTER_API, {
        firstName,
        lastName,
        email,
        password,
        specialization,
        qualification
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Signup Successful");
      navigate("/");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
    }
    dispatch(setLoading(false));
  };
};

export function patientSignUp(
  firstName,
  lastName,
  email,
  password,
  bloodGroup,
  navigate
) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", PATIENT_REGISTER_API, {
        firstName,
        lastName,
        email,
        password,
        bloodGroup,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Signup Successful");
      navigate("/");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
    }
    dispatch(setLoading(false));
  };
}

export function login(email, password, navigate){
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email, password
      });

      console.log("LOGIN RESPONSE.............", response)
      
      dispatch(setToken(response.data.token))
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      dispatch(setUser({ ...response.data.user, image: userImage }))
      
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.user))
      toast.success("Login Successful")
      navigate("/")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
  }
}

export function logout(navigate){
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));

    localStorage.removeItem("user")
    localStorage.removeItem("token")
    toast.success("Logged Out")
    navigate("/")
  }
}