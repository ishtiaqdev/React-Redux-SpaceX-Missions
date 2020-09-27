import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HistoryListPage from './pages/history-list-page';
import LaunchListPage from './pages/launch-list-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Welcome to SpaceX Missions</h1>
          <h3>
            Select any of the following sections to see further details.
          </h3>
        </div>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/histories">Histories</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/launches">Launches</NavLink>
        </div>
        <Route exact path="/histories" component={HistoryListPage}/>
        <Route exact path="/launches" component={LaunchListPage}/>
      </Container>
    );
  }
}

export default App;
