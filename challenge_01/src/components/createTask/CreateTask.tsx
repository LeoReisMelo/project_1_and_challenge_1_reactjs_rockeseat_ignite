import { PlusCircle } from 'phosphor-react'
import styles from './CreateTask.module.css';
import { ChangeEvent, FormEvent } from 'react';

interface CreateTaskProps {
    handleCreateTask:  (event: FormEvent) => void;
    handleNewTaskChange:  (event: ChangeEvent<HTMLInputElement>) => void;
    handleNewTaskInvalid:  (event: ChangeEvent<HTMLInputElement>) => void;
}

export function CreateTask({handleCreateTask, handleNewTaskChange, handleNewTaskInvalid}: CreateTaskProps) {
    return (
    <form onSubmit={handleCreateTask} className={styles.task}>
        <input placeholder="Adicione uma nova tarefa" onChange={handleNewTaskChange} onInvalid={handleNewTaskInvalid} required/>
        <button type="submit"> Criar <PlusCircle size={16} weight="bold" /> </button>
    </form>
    );
}