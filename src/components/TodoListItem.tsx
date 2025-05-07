import {  useState } from "react"
import { KeyboardEvent } from 'react'; 
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
    createTask: (title:string) => void
}


export const TodolistItem = ({tasks, title,deleteTasks,changeFilter, createTask}: TodoListPropsType) => {
 const [taskTitle, setTaskTitle] = useState('')  



 const createTaskHandler = () => {
  createTask(taskTitle)
  setTaskTitle('')
 }
 
 const onChangeInputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
  setTaskTitle(event.currentTarget.value)
 }

 const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) =>{
   if (event.key === 'Enter') {
    createTaskHandler()
  }
}

  return (
        <div>
          <h3>{title}</h3>
          <div>
            <input 
            value={taskTitle} 
            onChange={onChangeInputHandler}  
             onKeyDown={createTaskOnEnterHandler}/>


            <Button 
            title={"+"} 
            handleOnClick={createTaskHandler}/>
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