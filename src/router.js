import React,{lazy,Suspense}from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
const Test = lazy(()=> import('./routes/Test'))
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Suspense fallback={() => <div> Logining </div>}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" component={Test} />
      </Switch>
      </Suspense>
    </Router>
  );
}

export default RouterConfig;
