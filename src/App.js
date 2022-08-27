import "./App.css";
import Header from "./components/Header";
import ChessBoard from "./components/ChessBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="textColor">
        <Header />
        <ChessBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
