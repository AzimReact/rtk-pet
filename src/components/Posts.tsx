import { postsAPI } from "../services/PostService"
import PostItem from "./PostItem"

function Posts() {
  const { data: posts } = postsAPI.useFetchAllPostsQuery(10)
  return (
    <div>
      {posts && posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Posts