import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Report from './pages/Report';
import ReportMensal from './pages/ReportMensal';
import Environment from './pages/Environment';
import PreventiveIndex from './pages/PreventiveIndex';
import ASO from './pages/ASO';
import Away from './pages/Away';
import Ergo from './pages/Ergo';

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
          path="/report-mensal/preventive-index/:report"
          exact
          component={PreventiveIndex}
        />
        <Route path="/report-mensal/aso/:report" exact component={ASO} />
        <Route path="/report-mensal/away/:report" exact component={Away} />
        <Route path="/report-mensal/ergo/:report" exact component={Ergo} />
      </Switch>
    </BrowserRouter>
  );
}
