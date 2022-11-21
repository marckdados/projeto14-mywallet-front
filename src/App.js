import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyles";
import CashOutPage from "./pages/CashOutPage";
import DepositPage from "./pages/DepositPage";
import MyAccountPage from "./pages/MyAccountPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";
function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <SignInPage
              email={email}
              setEmail={setEmail}
              setPassword={setPassword}
              password={password}
            />
          }
        />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/my-account" element={<MyAccountPage />} />
        <Route path="/cashout" element={<CashOutPage />} />
        <Route path="/deposit" element={<DepositPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
