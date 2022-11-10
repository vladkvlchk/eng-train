import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Account from "./components/Account";
import TrainField from "./components/TrainField";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path=""
          element={
            <>
              <TrainField />
              <Account />
            </>
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
