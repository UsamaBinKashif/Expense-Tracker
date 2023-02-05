import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import Transaction from "../Transaction";
const TransactionList = () => {
  const  { transaction } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
