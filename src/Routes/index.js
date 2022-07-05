import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import UpdatePatrimony from "../pages/UpdatePatrimony";
import Patrimony from "../pages/Patrimony";
import Page404 from "../pages/Page404";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/user/:id" element={<User />} />
      <Route exact path="/updatePatrimony/:id" element={<UpdatePatrimony />} />
      <Route exact path="/patrimony/:id" element={<Patrimony />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
