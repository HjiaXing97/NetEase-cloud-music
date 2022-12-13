/**
 * @Author: Lenovo
 * @createdTime: 2022-12-2022/12/13 12:16
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";

interface IProps {
  children?: ReactNode;
}

const Focus: FC<IProps> = () => {
  return <>Focus</>;
};
export default memo(Focus);
