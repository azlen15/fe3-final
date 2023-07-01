import React from "react";
import Card from "../Components/Card";
import { Context } from "../Components/utils/global.context";
//import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {themeState, dentistState} = Context();

  return (
    <div className={themeState.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {dentistState.favs.map(fav => <Card name={fav.name} username={fav.username} id={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
