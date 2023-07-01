import React from 'react'
import Card from '../Components/Card'
import { Context } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Home() {

  const {themeState, dentistState} = Context();

  return (
    <main className={themeState.theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistState.dentistList.map(dent => <Card name={dent.name} username={dent.username} id={dent.id}/>)}
      </div>
    </main>
  )
}

export default Home

//