// import pic from '../assets/img/pic1.png';
// import star from '../assets/img/star.png';


export default function GalleryBox(props) {
  return (
    <div className="gallery-box">
      <img src={props.pic} alt=""></img>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>

  )
}