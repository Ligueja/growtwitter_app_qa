import styled from "styled-components";
import defaultImage from "../../../assets/default_profile.png";

interface MainProfileTopAvatarProps {
  avatarSrc?: string;
}

export const MainProfileTopAvatar = styled.div<MainProfileTopAvatarProps>`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 6px solid rgb(51, 51, 51);
  position: absolute;
  bottom: -45px;
  left: 12px;
  background-image: ${({ avatarSrc }) =>
    avatarSrc ? `url(${avatarSrc})` : `url(${defaultImage})`};
  background-position: center center;
  background-size: cover;
`;
