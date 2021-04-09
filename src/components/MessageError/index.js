import React from "react";

export default function MessageError({ message }) {
  return (
    <div className="alert alert-danger" role="alert">
      <p>{message}</p>
    </div>
  );
}
