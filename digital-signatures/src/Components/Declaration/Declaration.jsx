import React from "react";
import "./Declaration.scss";
import { connect } from "react-redux";
import * as DeclarationActions from "./DeclarationActions";
import { bindActionCreators } from "redux";
class Declaration extends React.Component {
  constructor(props) {
    super(props);
    this.html= require('../StaticTemplate/terms-conditions-v'+1+'.html');    
  }

  ReportFraud() {
    this.props.GetInvestorRespone("Fraud", this.props.identityNumber);
    this.props.history.push("/Confirmation");
  }

  Reject() {
    this.props.GetInvestorRespone("Reject", this.props.identityNumber);
    this.props.history.push("/Confirmation");
  }

  Accept() {
    this.props.GetInvestorRespone("Accept", this.props.identityNumber);
    this.props.history.push("/Confirmation");
  }

  componentWillMount() {
    this.props.GetTerms_Condition();
  }
  htmlDecode(input) {
    var e = document.createElement("div");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  render() {
    return (
      <div className="Declaration">
        <div className="container">
          <div className="card">
            <div className="rectangle-parent">
              <div className="card-header bg-white text-center">
                <span className="terms-and-conditions">
                  Terms And Conditions
                </span>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="scroll" dangerouslySetInnerHTML={{__html: this.html}}>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card-footer bg-white">
                    <div className="row">
                      <div className="col">
                        <div className="d-flex justify-content-center">
                          <div className="p-2">
                            <button
                              type="button"
                              onClick={() => this.Accept()}
                              className="rectangle"
                            >
                              <span className="action">ACCEPT</span>
                            </button>
                          </div>
                          <div className="p-2">
                            <button
                              type="button"
                              onClick={() => this.Reject()}
                              className="rectangle"
                            >
                              <span className="action">REJECT</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="d-flex justify-content-center">
                          <div className="p-2">
                            <button
                              type="button"
                              onClick={() => this.ReportFraud()}
                              className="rectangle bg-danger"
                            >
                              <span className="action">REPORT FRAUD</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  identityNumber: state.investorDetails.identityNumber,
  termsConditions: state.termsConditions
});

const mapActionsToProps = dispatch => ({
  GetInvestorRespone: DeclarationActions.GetInvestorRespone,
  GetTerms_Condition: bindActionCreators(
    DeclarationActions.GetTerms_Condition,
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Declaration);
