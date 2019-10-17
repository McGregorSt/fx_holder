import React from 'react';

import RateInput from './components/RateInput/RateInput'
import NewTransaction from './components/NewTransaction/NewTransaction'
import classes from './App.css'
import TransactionsDisplay from './components/TransactionsDisplay/TransactionsDisplay';
import LargestAmount from './components/LargestAmount/LargestAmount';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div>
      <header className={classes.Header}>
        <NewTransaction />
        <RateInput />
      </header>
      <main className={classes.Transactions}>
        <TransactionsDisplay />
        <LargestAmount />
      </main>
      <footer className={classes.Summary}>
        <Summary />
      </footer>
    </div>
  );
}

export default App;
