import { Trash, Circle, CheckCircle } from 'phosphor-react';
import styles from './TaskList.module.css';
import { useState } from 'react';

interface TaskProps {
    task: string;
    onDeleteTask: (taskToDelete: string) => void;
    onCompleteTask: (taskToComplete: string) => void;
    onUndoCompleteTask: (taskToComplete: string) => void;
}

export function TaskList({task, onDeleteTask, onCompleteTask, onUndoCompleteTask}: TaskProps) {
    console.log(task)
    const [completed, setCompleted] = useState(false);

    function handleDeleteTask() {
        onDeleteTask(task);
    }
    function handleCompleteTask() {
        console.log(completed)
    if (completed) {
      setCompleted(false);
      onUndoCompleteTask(task);
    } else {
      setCompleted(true);
      onCompleteTask(task);
    }
    }

    return (
        <div className={styles.task}>
            <div className={styles.taskBox}>
                <div className={styles.taskContent}>
                    <button className={styles.circleButton} onClick={handleCompleteTask} title="Concluir tarefa"> {completed ? <CheckCircle size={24}/> : <Circle size={24}/>}</button>
                        <div className={styles.task}>
                            <span className={completed ? styles.completed : ""}>{task}</span>
                        </div>
                        <button onClick={handleDeleteTask} className={styles.trashButton} title="Deletar tarefa">
                            <Trash size={24} />
                        </button>
                </div>
                </div>
            </div>
    );
}