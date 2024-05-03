

export default function Banner(props) {

  return(
    <section className="hero">
      <div className={props.herobg}>
        <h1 className={props.heroheader}>{props.title}</h1>
        <p className={props.herotext}>{props.text}</p>
        <div className="hero-button">
          <button className={props.primarybtn}>Synergy</button>
          <button className={props.secondarybtn}>Paradigm</button>
        </div>
      </div>
    </section>
  )
}
