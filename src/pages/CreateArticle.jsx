import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as fetch from "../api";

function CreateArticle() {
  const { userId } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  function titleinput(event) {
    setTitle(event.target.value);
  }
  function contentinput(event) {
    setBody(event.target.value);
  }
  function handleart() {
    fetch.createArt(userId, title, body);
    navigate(`/${userId}`);
  }

  return (
    <>
      <h1>{userId}님에 방명록 남기기</h1>
      <input
        type="text"
        placeholder="제목"
        onChange={titleinput}
        required
      ></input>
      <br />
      <input
        type="text"
        style={{
          height: "30px",
        }}
        placeholder="본문"
        onChange={contentinput}
      ></input>
      <br />
      <button onClick={handleart}>방명록 남기기!</button>
    </>
  );
}
export default CreateArticle;
