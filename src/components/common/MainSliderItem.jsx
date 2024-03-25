export default function MainSliderItem({title, description, buttonText}){
  return <div className="container">
    <div className="row">
      <div className="col-md-7 col-lg-6 ">
        <div className="detail-box">
          <h1>
            {title}
          </h1>
          <p>
            {description}
          </p>
          {buttonText && (<div className="btn-box">
            <a href="" className="btn1">
              {buttonText}
            </a>
          </div>)}
        </div>
      </div>
    </div>
  </div>
}