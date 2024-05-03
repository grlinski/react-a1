

export default function Gallery(props) {
  return (
    <section className='container'>
      <h2 className="gallery-title">Our Collection of Buzzwords</h2>
      <div className='gallery-container'>
        {props.pics.map(pics => (
          <div className='gallery-box' >
            <img key={pics.index} src={pics.url}></img>
            <h2>{pics.name}</h2>
            <p>{pics.description}</p>
          </div>
          ))}
      </div>
    </section>
  )
}

