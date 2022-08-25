
import './App.css'
import Contact from './components/contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/services/Service';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <Service />
     <Experience />
     <Portfolio />
     {/* <Testimonial /> */}
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
