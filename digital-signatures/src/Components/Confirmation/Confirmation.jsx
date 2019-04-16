import React from "react";
import "./Confirmation.scss";
import Success from "../../Images/Silica_success_icon-01.svg";
import Success2 from "../../Images/Silica_success_icon-02.svg";
class Confirmation extends React.Component {
  state = {};
  render() {
    return (
      <div className="Confirmation">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="rectangle text-center d-flex align-items-center justify-content-center">
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <img
                          className="oval-copy-2"
                          alt="sucess-logo"
                          src={Success}
                        />
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col">
                        <img
                          className="sml-screen"
                          alt="sucess-logo"
                          src={Success2}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h2 className="success-copy">Success!</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p className="your-response-has-be-copy">
                          Your response has been recieved, and will be processed
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-primary">Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div />
        </div>
      </div>
    );
  }
}

export default Confirmation;
