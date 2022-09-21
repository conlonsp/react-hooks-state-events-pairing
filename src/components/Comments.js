import React, {useState} from 'react'

function Comments({ comments }) {

  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>{visible ? 'Hide Comments' : 'Show Comments'}</button>
      {visible && <div>
        <h1>{comments.length} Comments</h1>
        {comments.map(comment => {
          return (
            <div>
              <h3>{comment.user}</h3>
              <p>{comment.comment}</p>
            </div>
          )
        })}
      </div>}
    </div>
  )
}

export default Comments

