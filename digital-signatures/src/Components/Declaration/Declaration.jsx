import React from "react";
import "./Declaration.scss";
import { connect } from "react-redux";
import * as DeclarationActions from "./DeclarationActions";
import { bindActionCreators } from "redux";

class Declaration extends React.Component {
  state = {};

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
                    <div className="scroll">
                      <h6 className="pl-4">INVESTOR DECLARATION</h6>
                      <p className="pl-4">
                        I, the investor, acknowledge that by signing this
                        document, I declare that:
                      </p>
                      <ul className="tnc">
                        <li>
                          I confirm that all information and declarations
                          provided by me in this application form and all
                          supporting documentation concerning this application
                          is accurate to the best of my knowledge.
                        </li>
                        <li>
                          I have read and understand the Disclosures, Terms and
                          Conditions set out in annexure A.
                        </li>
                        <li>
                          I hereby acknowledge that I am bound by this
                          application form, all supporting documentation as well
                          as the Disclosures, Terms and Conditions.
                        </li>
                        <li>
                          I understand what is meant by processing of my
                          personal information as documented in the Disclosures
                          Terms and Conditions, and hereby provide my consent to
                          Silica to process this information
                        </li>
                        <li>
                          I hereby agree and consent that Silica, its affiliates
                          and subsidiaries as defined in terms of the Companies
                          Act 71 of 2008, may process (obtain, utilise or
                          manage) my information (including the processing my
                          personal information outside the borders of South
                          Africa), according to the Disclosures, Terms and
                          Conditions and within the provisions of the applicable
                          legislation.
                        </li>
                        <li>
                          I confirm that Silica has not furnished me with any
                          advice concerning the accounting, regulatory,
                          financial, tax and/or legal consequences of investing
                          in this investment.
                        </li>
                        <li>
                          I confirm that the funds used from the inception of
                          the investment is and will not be the result of any
                          illegal activities as defined by the Prevention of
                          Organised Crime Act, (Act No. 121 of 1998) ("POCA").
                        </li>
                        <li>
                          I confirm that the information provided for this
                          investment has been fully and adequately explained to
                          me by my financial advisor.
                        </li>
                        <li>
                          I hereby declare, in accordance the Income Tax Act,
                          and in accordance with the provisions of international
                          tax treaties, that
                          <ol type="a">
                            <li>
                              The information I provide in this form, including
                              but not limited to my tax residency, is to the
                              best of my knowledge and belief, accurate and
                              complete; and
                            </li>
                            <li>
                              I undertake to forthwith inform you in writing
                              should the circumstances referred to in this
                              declaration change.
                            </li>
                          </ol>
                        </li>
                        <li>
                          I fully understand the information provided by the
                          financial advisor, as well as the product Disclosures,
                          Terms and Conditions and the associated risks of this
                          investment.
                        </li>
                        <li>
                          I acknowledge that if I terminate the services of my
                          appointed financial services provider (and thus the
                          services of my financial advisor) Silica is not
                          responsible to provide me with updates on legal
                          changes and/or industry developments, and that Silica
                          will not be managing my investment in line with my
                          investment needs.
                        </li>
                        <li>
                          I hereby confirm that I authorise the financial
                          service provider referred to in Section 9 of the
                          application form to submit online instructions and
                          transactions on my behalf.
                        </li>
                        <li>
                          I agree to the deduction and the payment of the
                          negotiated fees to my appointed financial services
                          provider on this and all future transactions until
                          otherwise specified.
                        </li>
                        <li>
                          All annual fees paid to the financial services
                          provider will be by means of a reduction of units from
                          the investment.
                        </li>
                        <li>Specify the percentage, excluding VAT:</li>
                      </ul>
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
