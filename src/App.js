import { useState } from "react";
import copy from "copy-to-clipboard";

function App() {
  const [keyword, setKw] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const slug = keyword + "/" + Date.now();
    const ok = window.confirm("Your slug is: " + slug);
    if (ok) {
      copy(slug);
      alert("copied!");
    } else {
      console.log("cancel");
    }
  };
  return (
    <div className="App">
      <h1>Make your slug based on milli second!</h1>
      <h5>Please enter your keyword with english</h5>
      <form onSubmit={onSubmit}>
        <input
          style={{ fontSize: "20px" }}
          onChange={(e) => setKw(e.target.value)}
          value={keyword}
          placeholder="enter keyword"
        />
        <input type="submit" value="slug 만들기" style={{ fontSize: "20px" }} />
      </form>
    </div>
  );
}

export default App;
