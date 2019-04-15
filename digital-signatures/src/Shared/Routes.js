import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Authentication from '../Components/Authentication/Authentication';
import Declaration from '../Components/Declaration/Declaration';
import Confirmation from '../Components/Confirmation/Confirmation'
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Authentication} />
                <Route path="/Authentication" exact component={Authentication} />
                <Route path="/Declaration" exact component={Declaration} />
                <Route path="/Confirmation" exact component={Confirmation} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;