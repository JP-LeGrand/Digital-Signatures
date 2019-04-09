import React from 'react';

class Authentication  extends React.PureComponent {
    state = {  }

    Authenticate(){
      window.location="/Declaration";
  }

    render() { 
        return ( <div>
            <div class="container">
  <form>
    <div class="form-group row">
      <label for="IdNumber" class="col-sm-2 col-form-label">ID Number</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="IdNumber" placeholder="ID Number"/>
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-sm-2 col-sm-10">
        <button type="button" class="btn btn-primary" onClick={() => this.Authenticate()}>Authenticate</button>
      </div>
    </div>
  </form>
</div>
        </div> );
    }
}
 
export default Authentication;