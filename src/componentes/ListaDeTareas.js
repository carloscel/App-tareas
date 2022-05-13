import React, { useState } from 'react';
import { TareaFormulario } from './TareaFormulario';
import '../estilos/ListaDeTareas.css'
import { Tarea } from './Tarea';

export const ListaDeTareas = () => {

  const [tareas, setTareas] = useState([])

  const agregarTarea = tarea => {
    
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas)
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas)
  };
  
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }
  
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) => 
            <Tarea 
              key={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  )
}

//tarea.texto.trim() le quita los espacios en blanco al inicio y al final.
//key={tarea.id} cuando se muestra una lista, para que react sepa el orden y no los cambie al actualizarlos debemos pasar un atributo o props. "key", es una forma de identificar este elemento en la lista y debe ser único