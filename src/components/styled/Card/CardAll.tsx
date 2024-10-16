import styled from "styled-components";
import backgroundImage from "../../../assets/default_profile.png";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding: 12px;
  font-size: 0.8rem;
`;

export const CardImage = styled.div`
  margin-right: 8px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  /* background-image: url(${backgroundImage}); */
  background-position: center center;
  background-size: cover;

  img {
    width: 100%;
    height: 100%;
    
  }
`;

export const CardContainerContent = styled.div`
  flex: 1 1 0%;
`;

export const CardUserData = styled.div`
  margin-right: 8px;

  span.user {
    font-weight: bold;
    padding-right: 5px;
  }

  span.user-name {
    margin-right: 8px;
  }
`;

export const CardContent = styled.div`
  color: rgb(79, 79, 79);
`;

export const CardButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const CardLikeReply = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 28px;

  img {
    height: 12px;
    width: 12px;
    margin-right: 4px;
  }

  span {
    font-size: 12px;
    color: rgb(130, 130, 130);
  }
`;

