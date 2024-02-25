import { Link } from "react-router-dom";

function App() {
  const title: string = "ボタン遷移できるよ！";

  return (
    <div className="App">
      <h1>{title}</h1>
      <Link to='/test'>
        ボタン
      </Link>
    </div>
  );
}

export default App;

