import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./css/style.css";
import "./css/icon-font.css";
import Popup from "./components/Popup";

function App() {
  return (
    <div className="App">
      <Navigation />
     <Header />
     <About />
     <Features />
     <Tours/>
     <Stories/>
     <Book />
     <Footer />
     <Popup/>

    </div>
  );
}

export default App;
