/**
 * @Author: Lenovo
 * @createdTime: 2022-12-2022/12/13 18:06
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";

interface IProps {
  children?: ReactNode;
}

const Album: FC<IProps> = () => {
  return <>Album</>;
};
export default memo(Album);
