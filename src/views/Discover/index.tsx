import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
  useAppShallowEqual
} from "src/store/hooks";
import { changeAge } from "src/store/modules/counter";

const Discover = () => {
  const { age } = useAppSelector(
    (state) => ({
      age: state.counter.age
    }),
    useAppShallowEqual
  );
  const dispatch = useAppDispatch();
  const handleChange = () => {
    dispatch(changeAge(222));
  };
  return (
    <>
      <p>{age}</p>
      <button onClick={handleChange}>change</button>
      <Link to={"/discover/recommend"}>推荐</Link>
      <Link to={"/discover/ranking"}>排行榜</Link>
      <Link to={"/discover/songs"}>歌单</Link>
      <Link to={"/discover/djRadio"}>主播电台</Link>
      <Link to={"/discover/artist"}>歌手</Link>
      <Link to={"/discover/album"}>新碟上架</Link>
      <Suspense fallback={"加载中"}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Discover;
