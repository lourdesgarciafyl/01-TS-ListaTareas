
type Tarea = {
    tarea: string;
    borrarTarea: () => void;
}

export const Tarea = ({tarea, borrarTarea}: Tarea) => {

  return (
    <div className="task">
        <span>{tarea}</span>
        <button className="buttonEliminar" onClick={borrarTarea}>Borrar tarea</button>
    </div>
  )
}