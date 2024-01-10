import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrap } from "./styles/basic";
import LoginPage from "./pages/LoginPage";
import CsReadPage from "./pages/CsReadPage";
import BasicLayout from "./layouts/BasicLayout";
import CartPage from "./pages/cartpage/CartPage";
import CommunityPage from "./pages/community/CommunityPage";
import Detail from "./pages/itemPage/Detail";
import MainPage from "./pages/mainPage/MainPage";
import MemberPage from "./pages/memberPage/MemberPage";
import MonthlyPage from "./pages/monthlyPage/MonthlyPage";
import MyPage from "./pages/myPage/MyPage";
import OrderComplete from "./pages/orderComplete/OrderComplete";
import OrderList from "./pages/orderList/OrderList";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import ReviewPage from "./pages/reviewPage/ReviewPage";
import DetailPage from "./pages/itemPage/DetailPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Signup from "./pages/signup/Signup";
import ModifyPage from "./pages/signup/ModifyPage";
import ItemPage from "./pages/signup/ItemPage";

const App = () => {
  return (
    <Wrap>
      <Routes>
        {/* <Route path="/intro" element={<Intro />}></Route> */}
        <Route path="*" element={<h1>파일이없네요.</h1>}></Route>
        <Route path="/" element={<BasicLayout />}></Route>

        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/inquiry" element={<CsReadPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>

        <Route path="/commu" element={<CommunityPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>

        <Route path="/member" element={<MemberPage />}></Route>
        <Route path="/monthly" element={<MonthlyPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>

        <Route path="/oc" element={<OrderComplete />}></Route>
        <Route path="/ol" element={<OrderList />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/review" element={<ReviewPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Modify" element={<ModifyPage />}></Route>
        <Route path="/item" element={<ItemPage />}></Route>

        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
