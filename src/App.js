import React, { useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  useEffect(() => {
    fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Max-Age": "3600",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*",
        "Access-Control-Request-Credentials": "true",
        "Access-Control-Request-Expose-Headers": "*",
        "Access-Control-Request-Method": "*",
      },

      body: JSON.stringify({
        email: "amitsharma199938@gmail.com",
        password: "Qwerty@199938",
      }),
    }).then((res) => {
      const result = res.json();
      console.log(result);
    });
  }, []);

  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
