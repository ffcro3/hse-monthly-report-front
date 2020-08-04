import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Report from './pages/Report';
import ReportMensal from './pages/ReportMensal';
import Environment from './pages/Environment';
import Predio5 from './pages/CLM/Predio5';
import Predio6 from './pages/CLM/Predio6';
import Predio7 from './pages/CLM/Predio7';
import PreventiveIndex from './pages/PreventiveIndex';
import ASO from './pages/ASO';
import Away from './pages/Away';
import Ergo from './pages/Ergo';
import Archive from './pages/Archive';
import Restrictions from './pages/Restrictions';
import CAT from './pages/CAT';
import Gogreen from './pages/Gogreen';
import Finish from './pages/Finish';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Report} />
        <Route path="/report" exact component={Report} />
        <Route
          path="/report-mensal/monthly/:report"
          exact
          component={ReportMensal}
        />
        <Route
          path="/report-mensal/environment/:report"
          exact
          component={Environment}
        />
        <Route
          path="/report-mensal/environment/clm/predio5/:report"
          exact
          component={Predio5}
        />
        <Route
          path="/report-mensal/environment/clm/predio6/:report"
          exact
          component={Predio6}
        />
        <Route
          path="/report-mensal/environment/clm/predio7/:report"
          exact
          component={Predio7}
        />
        <Route
          path="/report-mensal/preventive-index/:report"
          exact
          component={PreventiveIndex}
        />
        <Route path="/report-mensal/aso/:report" exact component={ASO} />
        <Route path="/report-mensal/away/:report" exact component={Away} />
        <Route path="/report-mensal/ergo/:report" exact component={Ergo} />
        <Route
          path="/report-mensal/archive/:report"
          exact
          component={Archive}
        />
        <Route
          path="/report-mensal/restrictions/:report"
          exact
          component={Restrictions}
        />
        <Route path="/report-mensal/cat/:report" exact component={CAT} />
        <Route
          path="/report-mensal/gogreen/:report"
          exact
          component={Gogreen}
        />
        <Route path="/report-mensal/finished" exact component={Finish} />
      </Switch>
    </BrowserRouter>
  );
}
