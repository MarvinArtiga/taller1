import React, { useState } from 'react';
import FormularioProyecto from './ProjectFom';
import ListaProyectos from './ProjectList';
import { v4 as uuidv4 } from 'uuid';
import estilos from '../page.module.css';

function App() {
  const [proyectos, setProyectos] = useState([]);
  
  // Función para agregar un nuevo proyecto
  const agregarProyecto = (nuevoProyecto) => {
    const proyectoConID = { ...nuevoProyecto, id: uuidv4() }; // Generar un ID único para el nuevo proyecto
    setProyectos([...proyectos, proyectoConID]);
  };

  // Función para eliminar un proyecto
  const eliminarProyecto = (id) => {
    const proyectosFiltrados = proyectos.filter(proyecto => proyecto.id !== id);
    setProyectos(proyectosFiltrados);
  };  

  // Función para calcular el total de inversión
  const calcularInversionTotal = () => {
    return proyectos.reduce((total, proyecto) => total + proyecto.inversion, 0);
  };

  // Función para calcular el total de inversión por tipo de proyecto
  const calcularInversionPorTipo = (tipo) => {
    return proyectos
      .filter(proyecto => proyecto.tipo === tipo)
      .reduce((total, proyecto) => total + proyecto.inversion, 0);
  };

  return (
    <div>
      <h1 className={estilos.subtitle}>ProjectPro - Gestión de Proyectos</h1>
      <div className={estilos.container}>
        <FormularioProyecto onAddProject={agregarProyecto} />
        <ListaProyectos
          proyectos={proyectos}
          inversionTotal={calcularInversionTotal()}
          inversionAmbiental={calcularInversionPorTipo('ambiental')}
          inversionNoAmbiental={calcularInversionPorTipo('no_ambiental')}
          onDeleteProject={eliminarProyecto} // Pasar la función de eliminación como prop
        />
      </div>
    </div>
  );
}

export default App;