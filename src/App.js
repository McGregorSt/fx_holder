import React from 'react';
import './App.css';

import RateInput from './components/RateInput/RateInput'
import NewTransaction from './components/NewTransaction/NewTransaction'
import classes from './App.css'
import TransactionsDisplay from './components/TransactionsDisplay/TransactionsDisplay';

function App() {
  return (
    <div>
      <div className={classes.Header}>
        <RateInput />
        <NewTransaction />
      </div>
      <div>
        <TransactionsDisplay />
      </div>
    </div>
  );
}

export default App;
