import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import Book from "./components/Book";
import Footer from "./components/Footer";
import "./css/style.css";

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Features />
     <Tours/>
     <Stories/>
     <Book />
     <Footer />

    </div>
  );
}

export default App;
