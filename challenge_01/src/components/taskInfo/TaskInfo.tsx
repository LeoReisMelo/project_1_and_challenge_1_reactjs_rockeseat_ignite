import styles from './TaskInfo.module.css';

export function TaskInfo({completed = 0, created = 0}) {
    return (
        <header className={styles.taskQuantity}>
           <span className={styles.taskCreated}>Tarefas criadas <span className={styles.numberTaskCreated}>{created}</span></span>
             <span className={styles.taskCompleted}>Concluidas <span className={styles.numberTaskCompleted}>{completed} de {created}</span></span>
        </header>
    );
}