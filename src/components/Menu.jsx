import { useState } from "react";
import "./Menu.css";

function Menu(props) {
  const [kelas, setKelas] = useState(true);
  console.log(props);
  console.log(props.props1);
  console.log(props.props2);

  const clickHandler = () => {
    setKelas(!kelas);
  };

  return (
    <div className="menu">
      <h1>{kelas ? "FSW2" : "FSW222"}</h1>
      <button onClick={clickHandler}>ganti heading</button>
      <ul>
        <li>
          <a href="/html/default.asp" target="_blank">
            HTML
          </a>
        </li>
        <li>
          <a href="/css/default.asp" target="_blank">
            CSS
          </a>
        </li>
        <li>
          <a href="/js/default.asp" target="_blank">
            JavaScript
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
