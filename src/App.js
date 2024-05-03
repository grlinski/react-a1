import './App.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Banner from './components/Banner';


//Pics
import aware from './assets/img/aware.jpg';
import blockchain from './assets/img/bc2.jpg';
import generation from './assets/img/gen.jpg';
import thought from './assets/img/thought.jpg';

function App() {
  const pics = [aware,blockchain,generation,thought];

  return (
    <div className="App">

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
