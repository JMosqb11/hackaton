import React from 'react'
import './Creation.css'

const Creation = () => {
  return (
    <div className="container-creation">

        <div className='creation-inform'>
    <input className="creation-imagen" type="file" allow="jpg" alt="Imagen" />
     <input className="creation-titulo" type="text" titulo placeholder="agregue imagen" />
     </div>
     
     <textarea className="creation-description" name="description" id="description" cols="30" rows="10">SAPO</textarea>

     <div className='creation-buttons'>
         <input className="creation-date" type="date"/>
         <div className='creation-button-dos'> 
             <button>Cancelar</button>
             <button>Guardar</button>
         </div>
         </div>
     


    </div>
  )
}

export default Creation