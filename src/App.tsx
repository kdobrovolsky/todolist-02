import {v1} from 'uuid'
import { useState } from 'react'
import './App.css'
import { TasksType, TodolistItem } from './components/TodoListItem'

export type FilterValues = 'all' | 'active' | 'completed'

export function App() {
  let [tasks, setTasks]=useState<TasksType[]>( [
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
  ])  

  const [filter,setFilter] = useState<FilterValues>('all')
 
  //Фильтрация таски
  const filteredTasks = filter === 'active'
  ?tasks.filter(task=>!task.isDone)
  :filter === 'completed'
  ?tasks.filter(tasks => tasks.isDone)
  :tasks

  const changeFilter = (filter:FilterValues) =>{
    setFilter(filter)
  } 

  //Удаление такси
  const deleteTasks = (taskId:string) => {
   const filteredTasks = tasks.filter(task => {
      return task.id !== taskId
    })
    setTasks(filteredTasks)
  }
  //Добавление таски



  const createTask = (title: string) => {
   const newTask = { id: v1(), title: title, isDone: false }
   const newTasks = [newTask, ...tasks]
   setTasks(newTasks)
    
  }

  
 
  return(
  <>
  <TodolistItem 
  tasks={filteredTasks} 
  title={'TodoListOne'}
  deleteTasks={deleteTasks}
  changeFilter ={changeFilter}
  createTask={createTask}
  />
  </>
  )
  
}


