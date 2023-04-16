import Featured from "./components/featured";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Howsection from "./components/how-section";
import Navbar from "./components/navbar";
import Searchcon from "./components/searchcon";
import Testimonials from "./components/testimonials";
import Why from "./components/why";



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Searchcon/>
        <Howsection/>
        <Why/>
        <Featured/>
        <Testimonials/>
        <Footer/>
    </div>
  );
}

export default App;
