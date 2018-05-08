import React, { Component } from 'react';

import queryString from 'query-string';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import MLBuscador from './MLBuscador';
import MLDetalhe from './MLDetalhe';
import MLResultados from './MLResultados';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const Buscador = ({ match }) => {
      return (
        <div><MLBuscador/></div>
      );
    }

    const Resultados = ({ match, location }) => {
      let query = queryString.parse(location.search);

      return (
        <div><MLResultados query={query.search}/></div>
      );
    }

    const Detalhe = ({ match }) => {
      return (
        <div><MLDetalhe itemId={match.params.id}/></div>
      );
    }

    const Items = ({ match, location }) => {
      return(
        <div>
          <Route path={`${match.path}/:id`} component={Detalhe}/>
          <Route exact path={match.path} component={Resultados}/>
        </div>
      );
    }

    return (
      <Router>
        <div>
          <Route exact path="/" component={Buscador}/>
          <Route path="/items" component={Items}/>
        </div>
      </Router>
    );

  }
}

export default App;
