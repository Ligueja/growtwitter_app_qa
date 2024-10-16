import styled from "styled-components";
import defaultImage from "../../../assets/default_profile.png";

interface NavDownImageProps {
  avatarSrc?: string;
}

export const NavDownImage = styled.div<NavDownImageProps>`
  margin-right: 8px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-image: ${({ avatarSrc }) =>
    avatarSrc ? `url(${avatarSrc})` : `url(${defaultImage})`};
  background-position: center center;
  background-size: cover;
`;

