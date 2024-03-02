import React, { useState } from 'react';
import estilos from '../page.module.css';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    tipo: 'ambiental',
    nombre: '',
    categoria: '',
    inversion: '',
    fechaInicio: '',
    descripcion: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProyecto = {
      tipo: formData.tipo,
      nombre: formData.nombre,
      categoria: formData.categoria,
      inversion: parseFloat(formData.inversion),
      fechaInicio: formData.fechaInicio,
      descripcion: formData.descripcion
    };
    onAddProject(nuevoProyecto);
    setFormData({
      tipo: 'ambiental',
      nombre: '',
      categoria: '',
      inversion: '',
      fechaInicio: '',
      descripcion: ''
    });
  };

  // Opciones predefinidas para la categoría
  const categorias = ['Alimentación', 'Transporte', 'Vivienda', 'Desarrollo de software', 'Construcción'];

  return (
    <form className={estilos.form} onSubmit={handleSubmit}>

      <div className={estilos.formGroup}>
        <label>Tipo de Proyecto:</label>
        <select className={estilos.formSelect} name="tipo" value={formData.tipo} onChange={handleInputChange}>
          <option value="ambiental">Ambiental</option>
          <option value="no_ambiental">No Ambiental</option>
        </select>
      </div>

      <div className={estilos.formGroup}>
        <label>Nombre del Proyecto:</label>
        <input className={estilos.formInput} type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
      </div>

      <div className={estilos.formGroup}>
        <label>Categoría:</label>
        <select className={estilos.formSelect} name="categoria" value={formData.categoria} onChange={handleInputChange}>
          <option value="">Selecciona una categoría</option>
          {categorias.map(categoria => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </select>
      </div>

      <div className={estilos.formGroup}>
        <label>Inversión:</label>
        <input className={estilos.formInput} type="number" name="inversion" value={formData.inversion} onChange={handleInputChange} />
      </div>

      <div className={estilos.formGroup}>
        <label>Fecha de Inicio:</label>
        <input className={estilos.formInput} type="date" name="fechaInicio" value={formData.fechaInicio} onChange={handleInputChange} />
      </div>

      <div className={estilos.formGroup}>
        <label>Descripción:</label>
        <textarea className={estilos.formTextarea} name="descripcion" value={formData.descripcion} onChange={handleInputChange}></textarea>
      </div>

      <button className={estilos.button} type="submit">Agregar Proyecto</button>
    </form>
  );
}

export default ProjectForm;