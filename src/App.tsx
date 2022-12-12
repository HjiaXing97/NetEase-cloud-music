import React, { useEffect } from "react";
import devRequest from "src/service";

const App = () => {
  useEffect(() => {
    devRequest
      .request({
        url: "/home/multidata",
        method: "get"
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <>div</>;
};

export default App;
