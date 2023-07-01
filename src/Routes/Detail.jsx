import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {themeState, dentistState, dentistDispatch} = Context();
  const {id} = useParams();
  const urlDentist = "https://jsonplaceholder.typicode.com/users/" + id;

    useEffect(()=>{
    axios(urlDentist)
    .then(res => dentistDispatch({type:"GET_DENTIST", payload: res.data }))
    }, [urlDentist])



  return (
    <div className={themeState.theme}>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tr>
          <th>Name</th>
          <td>{dentistState.dentist.name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{dentistState.dentist.email}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{dentistState.dentist.phone}</td>
        </tr>
        <tr>
          <th>Website</th>
          <td>{dentistState.dentist.website}</td>
      </tr>
      </table>
      
    </div>
  )
}

export default Detail