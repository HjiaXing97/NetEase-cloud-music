/**
 * @Author: Lenovo
 * @createdTime: 2022-12-2022/12/13 18:04
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  return <>Recommend</>;
};
export default memo(Recommend);
