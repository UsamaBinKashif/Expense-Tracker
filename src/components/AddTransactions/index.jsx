import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
const AddTransactions = () => {
  const { addTransactions } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onSumbit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransactions(newTransaction);
    setText("")
    setAmount(0)
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSumbit}>
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransactions;
