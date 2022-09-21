import React from 'react'

function Likes({ upvotes, onUpvote, downvotes, onDownvote }) {
  return (
    <div>
      <button onClick={onUpvote} name='upvotes'>{upvotes} 👍</button>
      <button onClick={onDownvote} name="downvotes">{downvotes} 👎</button>
    </div>
  )
}

export default Likes