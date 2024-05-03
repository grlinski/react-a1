// import pic from '../assets/img/pic1.png';
// import star from '../assets/img/star.png';
import aware from '../assets/img/aware.jpg';
import blockchain from '../assets/img/bc2.jpg';
import generation from '../assets/img/gen.jpg';
import thought from '../assets/img/thought.jpg';


export default function Gallery() {
  return (

    <section className='container'>
      <div className='gallery-container'>
        <div className="gallery-box">
          <img src={aware} alt=""></img>
          <h2>Awareness</h2>
          <p>Force people to become more aware of your cause. 
            Because awareness is doing something!</p>
        </div>
        <div className="gallery-box">
          <img src={blockchain} alt=""></img>
          <h2>Blockchain</h2>
          <p>No one really knows what the blockchain is, 
            so why not add it to your site?</p>
        </div>
        <div className="gallery-box">
          <img src={generation} alt=""></img>
          <h2>Gen Divide</h2>
          <p>It's always some era's fault. So blame one or more of 
            Boomers, Millenials or Gen X,Y,Z.
          </p>
        </div>
        <div className="gallery-box">
          <img src={thought} alt=""></img>
          <h2>Thought Leader</h2>
          <p>Ahead of your time? Misunderstood by the world?
            Perhaps you are one of the few thought leaders of our generation?
          </p>
        </div>
      </div>
    </section>
  )
}