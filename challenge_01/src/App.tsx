import { Header } from "./components/header/Header";
import { CreateTask } from "./components/createTask/CreateTask";
import { TaskList } from "./components/taskList/TaskList";
import styles from './App.module.css';
import './global.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { TaskInfo } from "./components/taskInfo/TaskInfo";


function App() {

  const [tasks, setTasks] = useState(['Tarefa de teste']);
  const [completedTasks, setCompletedTasks] = useState(['']);
  const [newTask, setTask] = useState('');

  function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newTask]);
        setTask('');
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setTask(event.target.value);
  }
  function onDeleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => task !== taskToDelete);

        setTasks(tasksWithoutDeletedOne);
  }
  function onCompleteTask(taskToComplete: string) {
    setCompletedTasks([...completedTasks, taskToComplete]);
  }
  function onUndoCompleteTask(taskToComplete: string) {
    const taskToUndo = completedTasks.filter(task => task !== taskToComplete);

        setCompletedTasks(taskToUndo);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

  return (
    <>
      <Header />
      <CreateTask handleCreateTask={handleCreateTask} handleNewTaskChange={handleNewTaskChange} handleNewTaskInvalid={handleNewTaskInvalid}/>
      <TaskInfo created={tasks.length} completed={completedTasks.length} />

      <div className={styles.wrapper}>
        {tasks.map(task => {
          return <TaskList key={task} task={task} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask} onUndoCompleteTask={onUndoCompleteTask}/>
        })}
      </div>
    </>
  )
}

export default App
