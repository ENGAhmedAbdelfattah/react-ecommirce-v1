import {
  CREATE_NEW_USER,
  RESET_PASSWORD,
  UPDATE_USER_PROFILE,
  VERIFY_PASSWORD,
  FOREGT_PASSWORD,
  GET_CURERNT_USER,
  LOGIN_USER,
  UPDATE_USER_PASSWORD,
} from "../type";

import { useInsertData } from "../../hooks/useInsertData";
import { useGetDataToken } from "./../../hooks/useGetData";
import { useInsUpdateData } from "../../hooks/useUpdateData";

//create new user
export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/signup`, data);
    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.response,
    });
  }
};

//login  user
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};

//login  user
export const getLoggedUser = () => async (dispatch) => {
  try {
    // /api/v1/users/getMe
    const response = await useGetDataToken(`/api/v1/users/me`);
    dispatch({
      type: GET_CURERNT_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_CURERNT_USER,
      payload: e.response,
    });
  }
};

//1-foregt  passwrod
export const forgetPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/forgotpassword`, data);
    dispatch({
      type: FOREGT_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: FOREGT_PASSWORD,
      payload: e.response,
    });
  }
};

//2-verify  passwrod
export const verifyPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/verifyresetcode`, data);
    dispatch({
      type: VERIFY_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: VERIFY_PASSWORD,
      payload: e.response,
    });
  }
};

//2-reset  passwrod
export const resetPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/auth/resetpassword`, data);
    dispatch({
      type: RESET_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: RESET_PASSWORD,
      payload: e.response,
    });
  }
};

//update  user data
export const updateUserProfileData = (body) => async (dispatch) => {
  try {
    // /api/v1/users/updateMe
    const response = await useInsUpdateData(`/api/v1/users/me`, body);
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: e.response,
    });
  }
};

//update  user password
export const updateUserPassword = (body) => async (dispatch) => {
  try {
    // /api/v1/users/changeMyPassword
    const response = await useInsUpdateData(
      `/api/v1/users/mechangepassword`,
      body
    );
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: e.response,
    });
  }
};
