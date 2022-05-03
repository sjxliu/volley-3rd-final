import { AUTH } from "../calls/callTypes";
import * as api from "../api/index.js";

export const signin = (signupData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (signupData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
