import { FilterValues } from "../App"
import { Button } from "./Button"


export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListPropsType ={
    tasks: TasksType[]
    title: string
    deleteTasks: (taskId:string) => void
    changeFilter: (filter:FilterValues) => void
}


export const TodolistItem = ({tasks, title,deleteTasks,changeFilter}: TodoListPropsType) => {
    return (
        <div>
          <h3>{title}</h3>
          <div>
            <input/>
            <Button title={"+"}/>
          </div>
          {tasks.length === 0 ?(
            <p>No Tasks</p>
          ):(
        
          <ul>
            {tasks.map((task) => (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
              <Button title={"X"} handleOnClick={()=>deleteTasks(task.id)}/>
            </li>
           ))}
          </ul>
          )}
          <div>
            <Button title={"All"} handleOnClick={()=>changeFilter('all')}/>
            <Button title={"Active"} handleOnClick={()=>changeFilter('active')}/>
            <Button title={"Completed"} handleOnClick={()=>changeFilter('completed')}/>
          </div>
        </div>
    )
  }