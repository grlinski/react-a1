// import pic from '../assets/img/pic1.png';
// import star from '../assets/img/star.png';
import aware from '../assets/img/aware.jpg';
import blockchain from '../assets/img/bc2.jpg';
import generation from '../assets/img/gen.jpg';
import thought from '../assets/img/thought.jpg';


export default function Gallery(props) {
  return (

    <section className='container'>
      <div className='gallery-container'>
        {props.pics.map((pics, index) => (
          <div className='gallery-box'>
            <img key={index} src={pics}></img>
          </div>
          ))}

      </div>
    </section>

    
  )
}
