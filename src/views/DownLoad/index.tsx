/**
 * @Author: Lenovo
 * @createdTime: 2022-12-2022/12/13 12:14
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";

interface IProps {
  children?: ReactNode;
}

const DownLoad: FC<IProps> = () => {
  return <>DownLoad</>;
};
export default memo(DownLoad);
