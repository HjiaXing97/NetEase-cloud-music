/**
 * @Author: by Lenovo
 * @createdTime: 2022/12/16 08:45
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";

interface IProps {
  children?: ReactNode;
}

const AppFooter: FC<IProps> = () => {
  return <footer>AppFooter</footer>;
};
export default memo(AppFooter);
