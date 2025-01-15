import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {
  const[nuevaTarea, setNuevaTarea] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])

  const handleAddTask = () => {
    if(nuevaTarea.trim() === '') return
    setListaTareas(tareaAnterior => [...tareaAnterior, nuevaTarea])
    setNuevaTarea('')
  }
  const borrarTarea = (index: number) => {
    setListaTareas(tareas => tareas.filter((_, i) => i !== index))
  }
  return (
    <div>
        <h1>Lista de tareas</h1>
        <div>
            <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Buscar tarea"
            >
            </input>
        </div>
        <button className="buttonAgregar" onClick={handleAddTask}>Agregar tarea</button>

        <ListaTareas listaTareas={listaTareas} borrarTarea={borrarTarea}/>
    </div>
  )
}