import './assets/style/App.css';
import './assets/style/index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Banner from './components/Banner';

//Pics
//pictures won't load without doing this first
import aware from './assets/img/aware.jpg';
import blockchain from './assets/img/bc2.jpg';
import generation from './assets/img/gen.jpg';
import thought from './assets/img/thought.jpg';

export default function App() {

  const images = [
    {
      index: 0,
      name: 'Awareness',
      url: aware,
      description: "Force people to become more aware of your cause. Because awareness is doing something!"
    },
    {
      index: 1,
      name: 'Blockchain',
      url: blockchain,
      description: "No one really knows what the blockchain is, so why not add it to your site?"
    },
    {
      index: 2,
      name: 'Gen Divide',
      url: generation,
      description: "It's always some era's fault. So blame one or more of Boomers, Millenials or Gen X,Y,Z."
    },
    {
      index: 3,
      name: 'Though Leader',
      url: thought,
      description: "Ahead of your time? Misunderstood by the world? Perhaps you are one of the few thought leaders of our generation?"
    }
  ];

  return (
    <div className="App">
      <Header></Header>
      <Banner herobg='hero-bg' heroheader='hero-header' herotext='hero-text'
        primarybtn='primary-button' secondarybtn='secondary-button'
        text="Synergizing the paradigm shift"
        title="Progress through buzzwords">
      </Banner>
      <Gallery pics={images}></Gallery>
      <Footer></Footer>
    </div>
  );
}

