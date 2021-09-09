// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, title, topic, imageUrl, author, avatarUrl} = eachBlog
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="item-container">
        <img src={imageUrl} alt="imag" className="image-topic" />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="author-tab">
            <img src={avatarUrl} alt="avatar" className="image-author" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
