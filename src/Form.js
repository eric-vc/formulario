import React from "react";
function Form() {
  const [values, setValues] = React.useState({
    email: "",
    nombre: "",
    apPaterno: "",
    apMaterno: "",
    telefono: "",
  });
  function handleSubmit(evt) {
    //evt.preventDefault();
    fetch ('localhost:3005/api/docentes/', {
      method: 'POST'
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) { // exito
        //alert('Categoría creada');
    // Aquí usar values para enviar la información (Recodatorio)
  }
});
}
  function handleChange(evt) {
    /*
      evt.target es el elemento que ejecuto el evento
      name identifica el input y value describe el valor actual
    */
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };
    // Sincroniza el estado de nuevo
    setValues(newValues);
  }
  
  return (
    <form onSubmit={handleSubmit} action="http://localhost:3005/api/docentes" method="POST">
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        value={values.nombre}
        onChange={handleChange}
      /><br />   
      <label htmlFor="apPaterno">Apellido Paterno</label>
      <input
        id="apPaterno"
        name="apPaterno"
        type="text"
        value={values.apPaterno}
        onChange={handleChange}
      /><br />
      <label htmlFor="apMaterno">Apellido Materno</label>
      <input
        id="apMaterno"
        name="apMaterno"
        type="text"
        value={values.apMaterno}
        onChange={handleChange}
      /><br />  
      <label htmlFor="telefono">Telefono</label>
      <input
        id="telefono"
        name="telefono"
        type="tel"
        minLength={10}
        maxLength={10}
        pattern="[0-9]{10}"
        title="Telefono a 10 digitos sin guiones, espacios ni caracteres especiales"
        value={values.telefono}
        onChange={handleChange}
      /><br />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      /><br />
      <button type="submit">Enviar Datos</button>
    </form>
  );
}
export default Form;