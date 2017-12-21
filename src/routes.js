import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import App from './components/App';
import StoriesContainer from './components/StoriesContainer';
import StoriesDataTable from './components/StoriesDataTable';
import StoryInfoComponent from './components/StoryInfoComponent';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
        <IndexRedirect to="/table" />
        <Route path="/" component={StoriesContainer}>
            <Route path="/table" component={StoriesDataTable} />
            <Route path=":id" component={StoryInfoComponent} />
        </Route>
   </Route>
 </Router>
);
export default Routes;