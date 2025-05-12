import { useState } from "react";
import { initPostArray } from "./postData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function PostList() {
  const navigate = useNavigate();
  const [postArray, setPostArray] = useState(initPostArray);

  return (
    <div className="post-container">
      <table className="post-list">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>날짜</th>
          </tr>
        </thead>

        <tbody>
          {postArray.map((data) => (
            <tr key={data.no}>
              <td>{data.no}</td>
              <td>
                <Link to="/post/detail">{data.title}</Link>
              </td>
              <td>{data.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="write-btn-box">
        <button className="btn-fill" onClick={() => navigate("/post/write")}>
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default PostList;
