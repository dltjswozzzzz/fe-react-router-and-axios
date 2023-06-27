import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as fetch from "../api";

function EditArticle() {
  const { articleId: id } = useParams();

  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch.getArtById(id).then((res) => {
      setData(res.data);
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, [id]);

  const handleModify = () => {
    fetch.editArt(id, title, body);
    navigate(`/articles/${id}`);
  };

  return (
    <>
      <input
        onChange={(event) => setTitle(event.target.value)}
        style={{ height: "30px" }}
        value={title}
      ></input>
      <br />
      <input
        onChange={(event) => setBody(event.target.value)}
        value={body}
      ></input>
      <br />
      <button onClick={handleModify}>방명록 남기기!</button>
    </>
  );
}

export default EditArticle;
