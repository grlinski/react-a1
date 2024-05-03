import './App.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import GalleryBox from './components/GalleryBox';
import Banner from './components/Banner';
import MyComponent from './components/Tester';
import Movies from './components/Movies';


//Pics
import aware from './assets/img/aware.jpg';
import blockchain from './assets/img/bc2.jpg';
import generation from './assets/img/gen.jpg';
import thought from './assets/img/thought.jpg';






function App() {
  const pics = [aware,blockchain,generation,thought];
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div className="App">
      <MyComponent fruits={fruits}></MyComponent>


      <Header></Header>
      <Banner herobg='hero-bg' heroheader='hero-header' herotext='hero-text'
        primarybtn='primary-button' secondarybtn='secondary-button'
        text="Synergizing the paradigm shift"
        title="Progress through buzzwords"
        >
      </Banner>
      <Gallery pics={pics}>

      </Gallery>
      <Footer></Footer>

    </div>
  );
}
export default App;
