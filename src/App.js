import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";
import "./css/style.css";

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Features />
     
     <Tours/>

    </div>
  );
}

export default App;
