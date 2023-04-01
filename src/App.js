import "./App.css";
import Form from "./modules/Form";
import Dashboard from "./modules/Dashboard";
import { Routes, Route, redirect, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children , auth= false}) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || false;

  if (!isLoggedIn &&  auth) {
    return <Navigate to={"/users/sign_in"} />;
  } else if (
    isLoggedIn &&
    ["/sign_in", "/sign_up"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes auth={true}>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/users/sign_in"
        element={
          <ProtectedRoutes>
            <Form isSignInPage={true} />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/users/sign_up"
        element={
          <ProtectedRoutes>
            <Form isSignInPage={false} />
          </ProtectedRoutes>
        }
      />
    </Routes>
    // <div className="bg-[#e1edff] h-screen flex justify-center items-center">
    //   {/* <Form /> */}
    //   <Dashboard />
    // </div>
  );
}

export default App;
