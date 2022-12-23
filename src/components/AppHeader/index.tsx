/**
 * @Author: by Lenovo
 * @createdTime: 2022/12/16 08:45
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import { NavLink } from "react-router-dom"; //自动添加选中状态
import { HeaderLeft, HeaderRight, NavHeader, SelectList } from "./styled";
import headerTitles from "src/assets/data/headerTitles";

interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  const showItems = (item) => {
    if (item.type === "path") {
      return <NavLink to={item.link}>{item.title}</NavLink>;
    } else {
      return (
        <a href={item.link} target='_blank' rel='noreferrer'>
          {item.title}
        </a>
      );
    }
  };

  return (
    <NavHeader>
      <div className='count'>
        <HeaderLeft>
          <a href='/' className='logo sprite_01'></a>
          <SelectList>
            {headerTitles.map((node) => {
              return (
                <div className={"item"} key={node.link}>
                  {showItems(node)}
                </div>
              );
            })}
          </SelectList>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
    </NavHeader>
  );
};
export default memo(AppHeader);
