import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import Balance from "./components/Balance";
import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
