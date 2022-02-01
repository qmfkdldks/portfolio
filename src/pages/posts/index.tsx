import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import {
  Container,
  Header,
  YearContainer,
  LeftContainer,
  RightContainer,
  Post,
  PostTitle,
} from "./style";
import { Link } from "react-router-dom";

export default function Posts() {
  const API =
    "http://api.mediastack.com/v1/news?access_key=d00c9272adf7c8b7cc4230e03f54b22d&keywords=software";
  const [media, setMedia] = useState<any>([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setMedia([data.data[0], data.data[1], data.data[2]]));
  }, []);

  return (
    <>
      <Sidebar />
      <Container>
        <Header>Index</Header>
        <YearContainer>
          <LeftContainer>2022</LeftContainer>
          <RightContainer>
            {media?.map((data: any) => {
              return (
                <Post>
                  <Link to="/">
                    <PostTitle>
                      {data.title}
                    </PostTitle>
                  </Link>
                  <time>{data.published_at}</time>
                </Post>
              );
            })}
          </RightContainer>
        </YearContainer>
        <YearContainer>
          <LeftContainer>2021</LeftContainer>
          <RightContainer>
            {media?.map((data: any) => {
              return (
                <Post>
                  <Link to="/">
                    <PostTitle>
                      {data.title}
                    </PostTitle>
                  </Link>
                  <time>{data.published_at}</time>
                </Post>
              );
            })}
          </RightContainer>
        </YearContainer>
      </Container>
    </>
  );
}
