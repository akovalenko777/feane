import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import '../../node_modules/leaflet/dist/leaflet.css'
import BookForm from "./BookForm"

export default function BookSection(){
  return (
    <section className="book_section layout_padding" id="book_section">
    <div className="container">
      <div className="heading_container">
        <h2>
          Book A Table
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <BookForm />
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}