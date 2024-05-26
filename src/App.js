import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import Balance from "./components/Balance";
import "./App.css";
import { AddTransaction } from "./components/AddTransaction";


function App() {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
