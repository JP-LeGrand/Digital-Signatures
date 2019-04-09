import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as AuthenticationAction from './AuthenticationAction';
import { bindActionCreators } from 'redux';

class Authentication  extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ID:''
    }
    this.handleChange=this.handleChange.bind(this);
  }

  
  handleChange(event) {
    this.setState({ID: event.target.value})
  }
    Authenticate(){  
      console.log("Authentication Method");
      this.props.Authenticate(this.state.ID,this.props.identityNumber);
    }
  
    componentWillMount(){
      this.props.GetDetails();
    }

    render() { 
        return ( <div>
            <div className="container">
  <form>
    <div className="form-group row">
      <label className="col-sm-2 col-form-label">ID Number</label>
      <div className="col-sm-10">
        <input type="text" 
        className="form-control" 
        id="IdNumber" 
        placeholder="ID Number"
        value={this.state.ID}
        onChange={this.handleChange}/>
      </div>
    </div>
    <div className="form-group row">
      <div className="offset-sm-2 col-sm-10">
        <button type="button" className="btn btn-primary" onClick={() => this.Authenticate()}>Authenticate</button>
      </div>
    </div>
  </form>
</div>
        </div> );
    }
}

Authentication.protoTypes = {
  investorTypeDescr: PropTypes.string,
  surname: PropTypes.string,
  titleId: PropTypes.number,
  titleDesc: PropTypes.string,
  firstNames: PropTypes.string,
  entityTypeDescr: PropTypes.string,
  natureOfPersonDescr: PropTypes.string,
  entityPurposeTypeId: PropTypes.string,
  entityPurposeTypeDescr:PropTypes.string ,
  mancoNumber: PropTypes.number,
  preferredName: PropTypes.string,
  initials: PropTypes.string,
  gender: PropTypes.string,
  language: PropTypes.string,
  industryNo: PropTypes.number,
  industryDescr: PropTypes.string,
  purposeInvNo: PropTypes.string,
  purposeInvDescr: PropTypes.string,
  contactPerson: PropTypes.string,
  occupationId: PropTypes.number,
  occupationDescr: PropTypes.string,
  maritalStatusDescr: PropTypes.string,
  identityDocumentTypeId: PropTypes.number,
  identityNumber: PropTypes.string 
};

const mapStateToProps = state => ({

  investorTypeDescr: state.investorDetails.investorTypeDescr,
  surname: state.investorDetails.surname,
  titleId: state.investorDetails.titleId,
  titleDesc: state.investorDetails.titleDesc,
  firstNames: state.investorDetails.firstNames,
  entityTypeDescr: state.investorDetails.entityPurposeTypeDescr,
  natureOfPersonDescr: state.investorDetails.natureOfPersonDescr,
  entityPurposeTypeId: state.investorDetails.entityPurposeTypeId,
  entityPurposeTypeDescr:state.investorDetails.entityPurposeTypeDescr ,
  mancoNumber: state.investorDetails.mancoNumber,
  preferredName: state.investorDetails.preferredName,
  initials: state.investorDetails.initials,
  gender: state.investorDetails.gender,
  language: state.investorDetails.language,
  industryNo: state.investorDetails.industryNo,
  industryDescr: state.investorDetails.industryDescr,
  purposeInvNo: state.investorDetails.purposeInvNo,
  purposeInvDescr: state.investorDetails.purposeInvDescr,
  contactPerson: state.investorDetails.contactPerson,
  occupationId: state.investorDetails.occupationId,
  occupationDescr: state.investorDetails.occupationDescr,
  maritalStatusDescr: state.investorDetails.maritalStatusDescr,
  identityDocumentTypeId: state.investorDetails.identityDocumentTypeId,
  identityNumber: state.investorDetails.identityNumber
});

 const mapActionsToProps = (dispatch) => ({
  GetDetails: bindActionCreators(AuthenticationAction.GetDetails,dispatch),
  Authenticate: AuthenticationAction.Authenticate
});

export default connect(mapStateToProps,mapActionsToProps)(Authentication);
