import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Report from './pages/Report';
import ReportMensal from './pages/ReportMensal';
import Environment from './pages/Environment';
import PreventiveIndex from './pages/PreventiveIndex';
import ASO from './pages/ASO';
import Away from './pages/Away';
import Ergo from './pages/Ergo';
import Archive from './pages/Archive';
import Restrictions from './pages/Restrictions';
import CAT from './pages/CAT';
import Gogreen from './pages/Gogreen';

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
      </Switch>
    </BrowserRouter>
  );
}
