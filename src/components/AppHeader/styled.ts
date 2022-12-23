import styled from "styled-components";
import image from "src/assets/image/sprite_01.png";

export const NavHeader = styled.header`
  height: 70px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  .count {
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.mixin.wrapV1};
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0, 0;
    text-indent: -9999px;
  }
`;

export const SelectList = styled.div`
  display: flex;
  line-height: 70px;

  .item {
    position: relative;

    a {
      color: #ccc;
      display: block;
      padding: 0 20px;
    }

    :last-of-type a {
      position: relative;

      ::after {
        position: absolute;
        content: "";
        width: 28px;
        height: 19px;
        background-image: url(${image});
        background-position: -190px 0;
        top: 20px;
        right: -15px;
      }
    }

    &:hover a,
    .active {
      color: #fff;
      background: #000;
      text-decoration: none;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
