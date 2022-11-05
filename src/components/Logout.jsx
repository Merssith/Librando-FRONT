import { useEffect } from "react";
import { useNavigate } from "react-router";
import { sendLogoutRequest } from "../state/user";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(sendLogoutRequest()).then(() => navigate("/"));
  });
};

export default Logout;
