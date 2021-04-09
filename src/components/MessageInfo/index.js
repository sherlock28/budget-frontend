import React from "react";

export default function MessageInfo() {
  return (
    <div className="container mt-5">
      <div className="row mx-auto">
        <div className="alert alert-success" role="alert">
          <p className="h4 text-center">
            Congratulations! You are successfully registered!
          </p>
          <p className="text-center mt-4">
            <a href="/login">Ir al Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
