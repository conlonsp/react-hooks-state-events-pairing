import React, {useState} from 'react'
import Likes from './Likes'
import Comments from './Comments'


function DisplayVideo({ video }) {
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)

  console.log('upvotes:', upvotes)
  console.log('downvotes:', downvotes)

  function handleUpvotes() {
    setUpvotes(upvotes + 1)
  }

  function handleDownvotes() {
    setDownvotes(downvotes + 1)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Likes
        onUpvote={() => handleUpvotes(upvotes)}
        upvotes={upvotes}
        onDownvote={handleDownvotes}
        downvotes={downvotes}
      />
      <br></br>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default DisplayVideo