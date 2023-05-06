import logo from './logo.svg';
import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/scss/Style.scss';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Body from './Pages/Body';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
    <Header/>
    <ScrollToTop/>
    
    <Footer/>
    </>
  );
}

export default App;
