import { useEffect, useState } from "react"

export default function ActionsLine(){
  const [actions, setActions] = useState([])

  const fetchActions = async () => {
    const resp = await fetch('data/actions.json')
    const json = await resp.json()
    setActions(json)
  }

  const fetchData = async () => {
    const resp = await fetch('http://localhost:1337/api/news', {
      method: "GET",
      headers: {
        "Authorization": "bearer 497e1676053f77b68c23e08261e3af431884921b41ed2df8c095c7da8aca7fd60c42f16ba4d1d8d0106bf1394f8287a6260bafb2c8c0cf0381552344317f515f62953f28e648bea2e5833099f56651d6dd14c7aaa34b31a805c94212cb2661b6666e7bb666b46e5b97786510d4a1640780f6bdbec4a224d98c30ae4a5a37b0a4"
      }
    })
    const json = await resp.json()
    console.log(json);
  }



  useEffect(()=>{
    fetchActions()
    fetchData()
  }, [])

  return (
    <section className="offer_section layout_padding-bottom">
    <div className="offer_container">
      <div className="container ">
        <div className="row">
          {actions.map((item) => {
            return (
              <div className="col-md-6  " key={item.id}>
                <div className="box ">
                  <div className="img-box">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5 dangerouslySetInnerHTML={{__html: item.title}} />
                    <h6>
                      <span>{item.discount}%</span> Off
                    </h6>
                    <a href="#">
                      Order Now <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" xml:space="preserve">
                                  <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                        c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"></path>
                                        <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                        C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                        c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                        C457.728,97.71,450.56,86.958,439.296,84.91z"></path>
                                        <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                        c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"></path>
                                                                                        </svg>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
          
          
        </div>
      </div>
    </div>
  </section>
  )
}