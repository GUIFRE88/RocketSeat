import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'

export function Comment({content, onDeleteComment}){

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state)=> {
       return state + 1;   
    });
  }


  return(
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false}
        src='https://avatars.githubusercontent.com/u/36928790?v=4'
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilhrme Freudenbyrg</strong>
              <time title='11 de Maio as oite e treze' dateTime='2022-05-11 08:00:00'>Cerca de uma 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
          <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
          </footer>
        </div>
      </div>
    </div>
  )
  
}