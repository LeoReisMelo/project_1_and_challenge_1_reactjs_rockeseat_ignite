import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }
    function handleLikeComment() {
        setLikeCount((state) => state + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/LeoReisMelo.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leonardo Reis</strong>
                            <time title="10 de outubro às 18:23" dateTime="2023-10-10 18:23:19">Cerca de 2h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p> {content} </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}> <ThumbsUp size={20} /> Aplaudir <span>{likeCount}</span> </button>
                </footer>
            </div>
        </div>
    );
}