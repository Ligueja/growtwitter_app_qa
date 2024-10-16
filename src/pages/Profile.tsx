import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { NavMain } from "../components/functional/NavMain";
import { ContainerPages } from "../components/styled/ContainerPeges";
import { Nav } from "../components/styled/Nav/Nav";
import { NavDownText } from "../components/styled/Nav/NavDownText";
import { NavDownImage } from "../components/styled/Nav/NavDownImage";
import { NavDownOut } from "../components/styled/Nav/NavDownOut";
import { NavDown } from "../components/styled/Nav/NavDown";
import { AssideContainer } from "../components/styled/Aside/AsideContainer";
import { AssideCard } from "../components/styled/Aside/AsideCard";
import { AssideLink } from "../components/styled/Aside/AsideLink";
import { Main } from "../components/styled/Main/Main";
import { MainContainer } from "../components/styled/Main/MainContainer";
import { MainProfileArrow } from "../components/styled/Main/MainProfileArrow";
import { MainProfileTittle } from "../components/styled/Main/MainProfileTittle";
import { MainProfileTopImage } from "../components/styled/Main/MainProfileTopImage";
import { MainProfileTopAvatar } from "../components/styled/Main/MainProfileTopAvatar";
import { MainProfileTopText } from "../components/styled/Main/MainProfileTopText";
import {
  CardButton,
  CardContainer,
  CardContainerContent,
  CardContent,
  CardImage,
  CardLikeReply,
  CardUserData,
} from "../components/styled/Card/CardAll";
import { Tweet } from "../configs/services/growtwitter-api/tweet/tweet.types";
import { listProfile } from "../configs/services/growtwitter-api/tweet/tweet.service";

import defaultProfileImage from "../assets/default_profile.png";
import { logout } from "../configs/services/growtwitter-api/auth/auth.service";

export function Profile() {
  const [tweets, setTweets] = useState<Array<Tweet>>([]);
  const [likedTweets, setLikedTweets] = useState<{ [key: string]: boolean }>({});
  const [likesCount, setLikesCount] = useState<{ [key: string]: number }>({});
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  const getItemFromLocalStorage = (key: string, defaultValue: string) => {
    const item = localStorage.getItem(key);
    return item ? item : defaultValue;
  };

  const name = getItemFromLocalStorage("name", "");
  const username = getItemFromLocalStorage("username", "");
  const avatar = getItemFromLocalStorage("avatar", defaultProfileImage);

  const theme = useTheme();

  useEffect(() => {
    if (!authToken) {
      navigate("/");
    } else {
      listTweets(authToken);
    }
  }, [navigate, authToken]);

  async function listTweets(authToken: string) {
    const resultado = await listProfile({ token: authToken });

    if (!resultado.ok) {
      alert(resultado.message);
      setTweets([]);
      return;
    }

    if (resultado.tweets) {
      setTweets(resultado.tweets);

      const initialLikesCount: { [key: string]: number } = {};
      const initialLikedTweets: { [key: string]: boolean } = {};

      resultado.tweets.forEach((tweet) => {
        initialLikesCount[tweet.id] = tweet.Like?.length || 0;
        initialLikedTweets[tweet.id] = false;
      });

      setLikesCount(initialLikesCount);
      setLikedTweets(initialLikedTweets);
    } else {
      setTweets([]);
      setLikesCount({});
      setLikedTweets({});
    }
  }

  const handleLikeClick = (tweetId: string) => {
    setLikesCount((prevLikes) => {
      const newCount = likedTweets[tweetId] ? prevLikes[tweetId] - 1 : prevLikes[tweetId] + 1;
      return { ...prevLikes, [tweetId]: newCount };
    });
    setLikedTweets((prevLikes) => ({
      ...prevLikes,
      [tweetId]: !prevLikes[tweetId],
    }));
  };

  const handleLogout = () => {
    logout(); 
    navigate("/");
  };

  return (
    <Fragment>
      <ContainerPages>
        <Nav>
          <NavMain />
          <NavDown>
            <NavDownImage avatarSrc={avatar || defaultProfileImage} />
            <NavDownText>
              <h1>{name}</h1>
              <p>@{username}</p>
            </NavDownText>
          </NavDown>
          <NavDownOut>
            <Link to="/" onClick={handleLogout}>Sair</Link>
          </NavDownOut>
        </Nav>
        <MainContainer>
          <Main>
            <div className='div-profile'>
              <MainProfileArrow>
                <Link to='/feed'>
                  <img
                    src={theme.icons.arrowIcon}
                    alt='arrowprofile'
                    className='arrow-profile'
                  />
                </Link>
              </MainProfileArrow>
              <MainProfileTittle>
                <p className='title-profile'>Perfil de @{username}</p>
                <span>{tweets.length} tweets</span>
              </MainProfileTittle>
            </div>

            <MainProfileTopImage>
              <MainProfileTopAvatar avatarSrc={avatar || defaultProfileImage} />
            </MainProfileTopImage>
            <MainProfileTopText>
              <h2>{name}</h2>
              <span>@{username}</span>
            </MainProfileTopText>

            {tweets.map((tweet) => (
              <CardContainer key={tweet.id}>
                <CardImage>
                  <img src={avatar || defaultProfileImage} alt='user-avatar' />
                </CardImage>
                <CardContainerContent>
                  <CardUserData>
                    <span className='user'>{tweet.user.name}</span>
                    <span className='user-name'>
                      @{tweet.user.username} • 3h
                    </span>
                  </CardUserData>
                  <CardContent>
                    <p>{tweet.content}</p>
                  </CardContent>
                  <CardButton>
                    <CardLikeReply>
                      <img src={theme.icons.iconReply} alt='reply-icon' />
                      <span>0</span>
                    </CardLikeReply>
                    <CardLikeReply onClick={() => handleLikeClick(tweet.id)}>
                      <img
                        src={
                          likedTweets[tweet.id]
                            ? theme.icons.iconLike.selected
                            : theme.icons.iconLike.default
                        }
                        alt='like-icon'
                      />
                      <span>{likesCount[tweet.id] || 0}</span>
                    </CardLikeReply>
                  </CardButton>
                </CardContainerContent>
              </CardContainer>
            ))}
          </Main>
        </MainContainer>
        <AssideContainer>
          <AssideCard>
            <h1>O que está acontecendo?</h1>
            <ul>
              <li>
                <p className='label'>Esportes - Há 45 min</p>
                <p className='title'>Assunto sobre esportes</p>
              </li>
              <li>
                <p className='label'>Assunto do Momento em Brasil</p>
                <p className='title'>Assunto do Momento</p>
              </li>
              <li>
                <p className='label'>Música - Assunto do Momento</p>
                <p className='title'>Assunto sobre Música</p>
              </li>
              <li>
                <p className='label'>Cinema - Assunto do Momento</p>
                <p className='title'>Assunto sobre Filmes e Cinema</p>
              </li>
            </ul>
            <AssideLink>
              <Link to={"/explore"}>Mostrar Mais</Link>
            </AssideLink>
          </AssideCard>
        </AssideContainer>
      </ContainerPages>
    </Fragment>
  );
}
