import React from "react"
import './styled.css'

const Background: React.FC = () => {
  return (
    <section className="background">
      <div className="background-image">
        <div className="background-image--opacity"></div>
      </div>

      <div className="background-content">
        <h1>TÚ NO TIENES UNA MASCOTA, LA MASCOTA TE TIENE A TI</h1>
        <p>"No importa lo que hagas o como le trates, el amor de las mascotas es infinito, su cariño es inmenso y su fidelidad es incondicional"</p>

        <a href="#content-main">Conoce Nuestras Mascotas</a>
      </div>
    </section>
  )
}

export default Background