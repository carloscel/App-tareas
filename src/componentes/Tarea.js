import React from 'react'
import '../estilos/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono'/>
      </div>
    </div>
  )
}

//react-icons es un componente de react por eso AiOutlineCloseCircle tiene que ir con los signos < y />

//<AiOutlineCloseCircle className='tarea-icono'/> la clase sería un props por ser un componente.