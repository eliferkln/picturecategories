import React, { useEffect, Suspense, useState } from "react";
import { ReactPictureAnnotation } from "react-picture-annotation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ReactDOM from "react-dom";

const App = () => {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onSelect = (selectedId: any) => console.log(selectedId);
  const onChange = (data: any) => console.log("data", data);

  return (
    <div className="App">
      <div className="edit-img">
        <ReactPictureAnnotation
          image="https://res.cloudinary.com/duotxzytv/image/upload/v1672299338/ReadyPlayerMe-Avatar_syhogi.png"
          onSelect={onSelect}
          onChange={onChange}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
