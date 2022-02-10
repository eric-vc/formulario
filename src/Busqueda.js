import React from "react";
function Busqueda() {
  const [values, setValues] = React.useState({
    id: "",
  });
  function handleSubmit(evt) {
    //evt.preventDefault();

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
    <form onSubmit={handleSubmit} action="http://localhost:3005/api/docentes/" method="GET">
      <label htmlFor="id">Ingresa ID para consultar Docente</label>
      <input
        id="id"
        name="id"
        type="text"
        value={values.id}
        onChange={handleChange}
      /><br />   
      <button type="submit">Consultar Docente</button>
    </form>
  );
}
export default Busqueda;