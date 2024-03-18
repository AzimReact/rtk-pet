import { FC } from "react"
import { IPost } from "../models/IPost"
import { useNavigate } from "react-router-dom";

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${post.id}`)
  }

  return (
    <div className="post-item" onClick={handleClick}>{post.title}</div>
  )
}

export default PostItem