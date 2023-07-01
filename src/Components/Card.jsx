import React from "react";
import { Link } from "react-router-dom";
import { Context } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const {themeState, dentistDispatch} = Context();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
    const dentSimplificado = {
      name: name,
      username: username,
      id: id
    }

    dentistDispatch({type: "ADD_FAV", payload: dentSimplificado})
    alert("Success! Dentist added")
  }

  return (
    <div className={themeState.theme}>
      <div className="card">
        <Link to= {"/dentist/" + id}>
          {/* En cada card deberan mostrar en name - username y el id */}
          <img src="./images/doctor.jpg" alt="imagen-doctor" className="card-img"></img>
          <h3>{name}</h3>
          <h4>{username}</h4>
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
          </Link>

          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addFav} className="favButton">⭐</button>
      </div>
    </div>
  );
};

export default Card;
