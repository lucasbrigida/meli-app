import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import MLHeader from './MLHeader';
import MLBreadcrumb from './MLBreadcrumb';
import MLFooter from './MLFooter';
import MLBuscador from './MLBuscador';
import MLDetalhe from './MLDetalhe';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      items: [],
      categories: [],
      itemId: ''
    };
  }

  getItems(query = '') {
    query = query.replace(/[^\w\s]/gi, '');
    axios.get(`http://localhost:3001/api/items?q=${query}`)
    .then(res => {
        this.setState({
          items: res.data.items,
          categories: res.data.categories
        });
    });
  }

  render() {
    const {categories, items, itemId} = this.state;

    const Buscador = ({ match }) => {
      return (
        <div>
          <MLHeader search={this.getItems.bind(this)}/>
          <MLBreadcrumb categories={categories}/>
          <MLBuscador items={items}/> 
        </div>
      );
    }

    const Resultados = ({ match, location }) => {
      let query = queryString.parse(location.search);

      return (
        <div>
          <MLHeader search={this.getItems.bind(this)} query={query.search || ''}/>
          <MLBreadcrumb categories={categories}/> 
          <MLBuscador items={items}/>
        </div>
      );
    }

    const Detalhe = ({ match }) => {
      console.log(match);

      return (
        <MLDetalhe itemId={match.params.id}/>
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
    

/*     return (
      <div>
        <MLHeader search={this.getItems.bind(this)}/>
        <MLBreadcrumb categories={categories}/>
        <MLBuscador items={items} go={}/>
        {itemId ? <MLDetalhe/> : null}
        <MLFooter/>
    </div>
    ); */
  }
}

export default App;
