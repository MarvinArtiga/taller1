import React from 'react';
import estilos from '../page.module.css';

function ProjectList({ proyectos, inversionTotal, inversionAmbiental, inversionNoAmbiental, onDeleteProject }) {

  const handleDeleteProject = (id) => {
    onDeleteProject(id);
  };
  
  return (
    <div className={estilos.project_cell}>
      <div>
        <h3 className={estilos.project_h3}>Proyectos Ambientales</h3>
        <p className={estilos.project_p}>Total Ambiental: ${inversionAmbiental}</p>
        {proyectos.map(proyecto => (
          proyecto.tipo === 'ambiental' && (
            <div key={proyecto.id}>
              <h4 className={estilos.project_nombre}>{proyecto.nombre}</h4>
              <p className={estilos.project_categoria}>Categoría: {proyecto.categoria}</p>
              <p className={estilos.project_inversion}>Inversión: ${proyecto.inversion}</p>
              <p className={estilos.project_fecha}>Fecha: {proyecto.fechaInicio}</p>
              <p className={estilos.project_descripcion}>Descripcion: {proyecto.descripcion}</p>
              <button onClick={() => handleDeleteProject(proyecto.id)} className={estilos.button2}>Eliminar</button>
            </div>
          )
        ))}
      </div>
      <div>
        <h3 className={estilos.project_h3}>Proyectos No Ambientales</h3>
        <p className={estilos.project_p}>Total No Ambiental: ${inversionNoAmbiental}</p>
        {proyectos.map(proyecto => (
          proyecto.tipo === 'no_ambiental' && (
            <div key={proyecto.id}>
              <h4 className={estilos.project_nombre}>{proyecto.nombre}</h4>
              <p className={estilos.project_categoria}>Categoría: {proyecto.categoria}</p>
              <p className={estilos.project_inversion}>Inversión: ${proyecto.inversion}</p>
              <p className={estilos.project_fecha}>Fecha: {proyecto.fechaInicio}</p>
              <p className={estilos.project_descripcion}>Descripcion: {proyecto.descripcion}</p>
              <button onClick={() => handleDeleteProject(proyecto.id)} className={estilos.button2}>Eliminar</button>
            </div>
          )
        ))}
      </div>
      <div>
        <h3 className={estilos.project_h3}>Total de Todos los Proyectos</h3>
        <p className={estilos.total}>Total Inversión: ${inversionTotal}</p>
      </div>
    </div>
  );
}

export default ProjectList;