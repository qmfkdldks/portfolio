import React from "react";
import { Image } from "./style";
import Container from "../../components/container";
import Reveal from "../../components/reveal";
import Title from "../../components/title";
import Description from "../../components/description";

const Slice = () => {
  return (
    <>
      <Container inverted>
        <Reveal>
          <Title>Working with one of the best delivery team in US</Title>
          <Description>
            Integrated text review platform and managed over 8M of reviews. Have
            increased search engine performance by 268%. Team has grown from 3
            to over 10 engineers. I have also launched server side rendered
            react app using express framework. And integrated CMS into the
            project to help marketing team move faster. And accomplished to
            generate over +7000 dynamic pages which can be modifed without
            engineers works. Participated in early phase of the new feature.
            This is where I could learn to work wit agile metodology and
            accomplish startup goals.
            <span>
              Ruby On Rails, Microservices, Typescript, React.js, Redux,
              Express, Gitlab CI/CD
            </span>
          </Description>
        </Reveal>
      </Container>
      <Container inverted>
        <Image
          style={{ width: "100px" }}
          src="https://logodownload.org/wp-content/uploads/2017/04/forbes-logo-5.png"
        />
      </Container>
    </>
  );
};

export default Slice;
