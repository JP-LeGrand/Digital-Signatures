import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as AuthenticationAction from "./AuthenticationAction";
import { bindActionCreators } from "redux";
import queryString from "query-string";
import base64 from "base-64";
import { ToastContainer, toast } from "mdbreact";
import "./Authentication.scss";

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.which === 13) event.preventDefault();
    this.setState({ ID: event.target.value });
  }

  Authenticate() {
    const isValid = this.props.Authenticate(
      this.state.ID,
      this.props.identityNumber
    );
    if (isValid) {
      this.props.history.push("/Declaration");
    }
    return isValid;
  }

  DecodeLink(link) {
    var decodedLink, decodedURI;
    try {
      decodedLink = base64.decode(link);
      decodedURI = decodeURIComponent(decodedLink);
    } catch (err) {
      toast.error("Inavlid LINK, Redirect to link sent via sms/email");
    }
    return decodedURI;
  }

  componentWillMount() {
    let params = queryString.parse(this.props.location.search);
    this.props.GetDetails(this.DecodeLink(params.blobUri));
  }
  render() {
    return (
      <Fragment>
        <ToastContainer
          hideProgressBar={true}
          newestOnTop={true}
          autoClose={5000}
        />
        <div className="Authentication">
          <div className="container">
            <form onKeyPress={this.handleChange}>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <div className="rectangle">
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <div className="col">
                              <div className="row">
                                <div className="col-sm-4 mx-auto m-3 ml-5 pl-5">
                                  <span className="please-enter-your-id-copy m-3">
                                    Please enter your ID number
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-4 mx-auto">
                              <input
                                type="text"
                                className="form-control rectangle-copy"
                                id="IdNumber"
                                placeholder="ID Number"
                                value={this.state.ID}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <div className="row">
                                  <div className=" col-sm-4 mx-auto m-3">
                                    <button
                                      type="button"
                                      className="btn rectangle-copy-2"
                                      onClick={() => this.Authenticate()}
                                    >
                                      <span className="submit-copy">
                                        SUBMIT
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  identityNumber: state.investorDetails.identityNumber
});

const mapActionsToProps = dispatch => ({
  GetDetails: bindActionCreators(AuthenticationAction.GetDetails, dispatch),
  Authenticate: AuthenticationAction.Authenticate
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Authentication);
