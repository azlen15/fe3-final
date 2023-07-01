import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [usuario, setUsuario] = useState({
    nombreCompleto: '',
    email: ''
  });

  const[error, setError] = useState(false);
  const[exito, setExito] = useState(false);

    const onSubmitForm =(e) =>{
      e.preventDefault()

      const validarNombre = () =>{
          const withoutSpaces = usuario.nombreCompleto.trim();

          return withoutSpaces.length > 4
      }

      if(validarNombre()){
          console.log(usuario);
          setExito(true)
          setError(false)
      }else{
          setError(true)
          setExito(false)
      }

    }

  return (
    <div>
      <form onSubmit={onSubmitForm} className='form'>
        <label>Ingresa tu nombre Completo</label>
        <input type="text" onChange={(e) => setUsuario({ ...usuario, nombreCompleto: e.target.value })}></input>
        
        <label>Ingresa tu email</label>
        <input type="email" onChange={(e) => setUsuario({...usuario, email: e.target.value})}></input>

        <button type="submit">Enviar</button>
      </form>

      {error && "Por favor verifique su información nuevamente"}
      {exito && <h2>Gracias {usuario.nombreCompleto}, te contactaremos cuando antes vía mail</h2>}
    </div>
  );
};

export default Form;
