import React from 'react';
import './Declaration.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as DeclarationActions from './DeclarationActions';
import { bindActionCreators } from 'redux';

class Declaration extends React.Component {
  state = {}

  ReportFraud() {
    this.props.GetInvestorRespone("Fraud", this.props.identityNumber);
    this.props.history.push('/Confirmation');
  }

  Reject() {
    this.props.GetInvestorRespone("Reject", this.props.identityNumber);
    this.props.history.push('/Confirmation');
  }

  Accept() {
    this.props.GetInvestorRespone("Accept", this.props.identityNumber);
    this.props.history.push('/Confirmation');
  }

  componentWillMount() {
    this.props.GetTerms_Condition();
  }
  htmlDecode(input) {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  render() {
    return (<div className="Declaration">
      <div className="container  pb-5">
        <p className="h3 text-center"><u>INVESTOR DECLARATION</u></p>
        <p> I, the investor, acknowledge that by signing this document, I declare that:</p>
        <div dangerouslySetInnerHTML={{ __html: this.props.termsConditions.termsConditions }}>
        </div>
      </div>
      <div className="footer bg-light">
        <div className="d-flex flex-row justify-content-around">
          <div className="p-2">
            <button type="button" onClick={() => this.Accept()} className="btn btn-success">Accept</button>
          </div>
          <div className="p-2">
            <button type="button" onClick={() => this.Reject()} className="btn btn-danger">Reject</button>
          </div>
          <div className="p-2">
            <button type="button" onClick={() => this.ReportFraud()} className="btn btn-warning">Report Fraud</button>
          </div>
        </div>
      </div>
    </div>);
  }
}

Declaration.protoTypes = {
  termsConditions: PropTypes.string
};

const mapStateToProps = state => ({
  identityNumber: state.investorDetails.identityNumber,
  termsConditions: state.termsConditions
});

const mapActionsToProps = (dispatch) => ({
  GetInvestorRespone: DeclarationActions.GetInvestorRespone,
  GetTerms_Condition: bindActionCreators(DeclarationActions.GetTerms_Condition, dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(Declaration);