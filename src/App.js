import style from  './App.module.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NewSection1 from './Components/NewSection1';
import SliderType from './Components/SliderType';

function App() {
  return (
    <div className={style.parent}>
    <Header />
    <SliderType />
    <NewSection1 />
    <Footer />
    </div>
  );
}

export default App;
