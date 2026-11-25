import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tweet, setTweet] = useState('')
  const [posts, setPosts] = useState(function () {
    return JSON.parse(localStorage.getItem('tweets')) || []
  })

  const characterCount = tweet.length
  const isOverLimit = characterCount > 280

  useEffect(function () {
    localStorage.setItem('tweets', JSON.stringify(posts))
  }, [posts])

  function handlePost() {
    if (tweet.trim() === '' || isOverLimit) return

    const newPost = {
      id: Date.now(),
      text: tweet,
      timestamp: new Date().toLocaleString()
    }

    setPosts([newPost, ...posts])
    setTweet('')
  }

  function handleDelete(id) {
    setPosts(posts.filter(function (post) {
      return post.id !== id
    }))
  }

  function handleClear() {
    setTweet('')
  }

  return (
    <div className="container">
      <h1>Tweet Character Validator</h1>
      <p className="subtitle">Write your thoughts. Stay within 280 characters.</p>

      <div className="tweet-box">
        <textarea
          value={tweet}
          onChange={function (event) {
            setTweet(event.target.value)
          }}
          placeholder="What's happening?"
          className={isOverLimit ? 'textarea error' : 'textarea'}
        />

        <div className="controls">
          <p className={isOverLimit ? 'count error-text' : 'count'}>
            {characterCount}/280 characters
          </p>

          <div className="buttons">
            <button className="clear-btn" onClick={handleClear}>
              Clear
            </button>

            <button
              className="post-btn"
              onClick={handlePost}
              disabled={isOverLimit || tweet.trim() === ''}
            >
              Post
            </button>
          </div>
        </div>
      </div>

      <div className="posts-section">
        <h2>Your Posts ({posts.length})</h2>

        {posts.length === 0 ? (
          <p className="empty-message">No posts yet. Write your first tweet!</p>
        ) : (
          posts.map(function (post) {
            return (
              <div className="post-card" key={post.id}>
                <p className="post-text">{post.text}</p>

                <div className="post-footer">
                  <span>You Posted @ {post.timestamp}</span>

                  <button
                    className="delete-btn"
                    onClick={function () {
                      handleDelete(post.id)
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default App
