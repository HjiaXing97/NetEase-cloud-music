/**
 * @Author: Lenovo
 * @createdTime: 2022-12-2022/12/13 18:07
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";

interface IProps {
  children?: ReactNode;
}

const Songs: FC<IProps> = () => {
  return <>Songs</>;
};
export default memo(Songs);
