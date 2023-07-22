
import './App.css';
import Header from "./components/Header";
import Intro from "./components/Intro";
import Sectionone from "./components/Sectionone";
import Sectionthree from "./components/Sectionthree";
import Footer from "./components/Footer";
import Sectiontwo from "./components/Sectiontwo";
function App() {
  return (
    <>
    <div className='text-white'>
      <Header />
      <Intro />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Footer />
      </div>
    </>
  );
}

export default App;
