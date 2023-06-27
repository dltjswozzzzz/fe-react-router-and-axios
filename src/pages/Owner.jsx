import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const Owner = () => {
  const navigate = useNavigate();
  const { ownerId } = useParams();
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   api.getArticleByOwnerId(ownerId).then((res) => {
  //     setArticles(res.data);
  //   });
  //   console.log(articles);
  // }, [ownerId]);
  return (
    <>
      <h1>{ownerId}님의 방명록</h1>
      {articles.length ? (
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.id}>
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>방명록이 없습니다.</p>
      )}

      <button onClick={() => navigate(`/${ownerId}/create`)}>
        방명록 남기기
      </button>
    </>
  );
};

export default Owner;
