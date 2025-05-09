import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    //const loggedInUser = localStorage.setItem("loggedInUser", " ");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
    //console.log("appp m h ");
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: authData.userData.admin })
      );
    } else if (authData) {
      const employee = authData.userData.employees.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        setLoggedInUserData(employee);
      } else {
        alert("Invalid Credentials !!"); // Ensuring it executes if no match found
      }
    } else {
      alert("Invalid Credentials !!");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? (
        <AdminDashboard
          authData={authData.userData}
          data={loggedInUserData}
          changeUser={setUser}
          user={user}
        />
      ) : user == "employee" ? (
        <EmployeeDashboard
          authData={authData.userData.employees}
          data={loggedInUserData}
          changeUser={setUser}
          user={user}
        />
      ) : null}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
