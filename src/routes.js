import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Report from './pages/Report';
import ReportMensal from './pages/ReportMensal';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Report} />
        <Route path="/report" exact component={Report} />
        <Route path="/report-mensal/:report" exact component={ReportMensal} />
      </Switch>
    </BrowserRouter>
  );
}
