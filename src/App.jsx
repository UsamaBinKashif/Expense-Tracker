import { useState } from "react";
import AddTransactions from "./components/AddTransactions";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <Balance />
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransactions/>
      </main>
      
    </>
  );
}

export default App;
