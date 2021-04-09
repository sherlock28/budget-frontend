import React, { useState } from "react";
import signUpService from "services/signUp";
import MessageInfo from "components/MessageInfo";
import MessageError from "components/MessageError";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [isBadResponse, setIsBadResponse] = useState(false);
  const [message, setMessage] = useState("");

  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    name === "email"
      ? setEmail(value)
      : name === "password"
      ? setPassword(value)
      : setConfirmPass(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    signUpService({ email, password, confirmpass }).then(res => {
      if (res.isResgisteredOk) {
        setRegistered(true);
      } else {
        setRegistered(false);
        setIsBadResponse(true);
        setMessage(res.message);
      }
      setIsSubmitting(false);
    });
  };

  if (registered) {
    return <MessageInfo />;
  }

  return (
    <div className="container p-4 mt-5">
      <div className="row">
        <div className="col-md-4 mx-auto">
          {isBadResponse && <MessageError message={message} />}
          <div className="card text-center">
            <div className="card-header">
              <h3>Registro</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmpass">Repite el password</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    className="form-control"
                    name="confirmpass"
                    id="confirmpass"
                    required
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-success btn-lg btn-block"
                    disabled={isSubmitting}
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
