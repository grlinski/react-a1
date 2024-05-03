


// export default function Gallery(props) {
//   return (

//     <section className='container'>
//       <div className='gallery-container'>
//         {props.pics.map((pics,index) => (
//           <div className='gallery-box'>
//             <img key={index} src={pics}></img>
//           </div>
//           ))}

//       </div>
//     </section>

    
//   )
// }



export default function Gallery(props) {
  return (

    <section className='container'>
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

