function Service(props)
{
    return(
    <div className="card">
        <div className="card-img">
            <img src={props.image} className="card-image"/>
        </div>
        <h1 className="card-title">
            {props.title}
        </h1>
        <h3 className="sub-title">
            {props.subtitle}
        </h3>
        <p className="card-desc">
            {props.desc}
        </p>
        <p className="btn-parent">
        <button className="card-btn">
            Read More
        </button>
        </p>
    </div>
    )
}

export default Service;