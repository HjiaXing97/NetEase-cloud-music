import React, { Suspense } from "react";
import { Link, useRoutes } from "react-router-dom";
import routes from "src/router";

const App = () => {
  return (
    <div className='App'>
      <div className='nav'>
        <Link to={"/discover"}>发现音乐</Link>
        <Link to={"/mine"}>我的音乐</Link>
        <Link to={"/focus"}>我的关注</Link>
        <Link to={"/download"}>下载客户端</Link>
      </div>
      <Suspense fallback='请稍等'>{useRoutes(routes)}</Suspense>
    </div>
  );
};

export default App;
