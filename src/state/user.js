import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

// al trabajar con axios (async) en redux necesitamos acciones de tipo createAsyncThunk
export const sendLoginRequest = createAsyncThunk(
  "USER_LOGIN",
  ({ email, password }) => {
    return axios
      .post("http://localhost:3001/api/users/login", { email, password }) /* ver ruta back */
      .then((res) => res.data)
      .then((user) => user) // guardamos en el estado info de user del back {id, name, lastname, email }
      .catch((error) => {
        console.log(`LOG IN ERROR`, error);
      });
  }
);

export const sendLogutRequest = createAsyncThunk("USER_LOGOUT", () => {
  return axios
    .post("/api/logout")
    .then(() => initialState) // guardamos en el estado el estado inicial {}
    .catch(() => {
      alert("Error: logout problem");
    });
});

// persistencia del user? cookie o localStorage
/* export const getUserCookie = createAsyncThunk("GET_USER_COOKIE", () => {
  return axios
    .get("/api/me")
    .then((res) => res.data)
    .then((user) => user)
    .catch(() => {
      return initialState;
    });
}); */

const userReducer = createReducer(initialState, {
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [sendLogutRequest.fulfilled]: (state, action) => action.payload,
  //  [getUserCookie.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
