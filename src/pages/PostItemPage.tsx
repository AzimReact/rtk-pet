import { useNavigate, useParams } from "react-router-dom";
import { postsAPI } from "../services/PostService";
import Pagewrapper from "../layouts/Pagewrapper";

const PostItemPage = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  if (!id) return <div>No post ID provided</div>; // Обрабатываем случай, когда id отсутствует

  const { data: post } = postsAPI.useFetchPostQuery(id)

  const handleClick = () => {
    navigate('/posts')
  }

  return (
    <Pagewrapper>
      <button onClick={handleClick}>Back</button>
      <div>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
    </Pagewrapper>
  );
};

export default PostItemPage;