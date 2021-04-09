import React from "react";
import signUpService from 'services/signUp';

export default function SignUp() {
  return (
    <div className="container p-4 mt-5">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center">
            <div className="card-header">
              <h3>Registro</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                  />
                </div>

                <div class="form-group">
                  <label for="confirmpass">Repite el password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmpass"
                    id="confirmpass"
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-success btn-lg btn-block">
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
