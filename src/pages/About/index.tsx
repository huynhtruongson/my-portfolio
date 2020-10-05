import { MailFilled, PhoneFilled } from "@ant-design/icons";
import ButtonLink from "components/ButtonLink";
import Container from "components/Container";
import Images from "constants/images";
import about from "data/about";
import React, { ReactElement } from "react";
import "./AboutPage.scss";
interface Props {}
const content = <b>0941461224</b>;
function AboutPage(props: Props): ReactElement {
  return (
    <Container title='About me'>
      <div className="about-page">
        <div className="about-page__left-profile">
          <img src={Images.TZUYU} alt=''/>
          <div className="about-page__button-group">
            <ButtonLink href="mailto:htson.dev.it@gmail.com?subject=Hi Sơn!">
              <MailFilled />
            </ButtonLink>
            <ButtonLink content={content}><PhoneFilled/></ButtonLink>
          </div>
        </div>
        <div className="about-page__right-profile">
          <div className="about-page__title">
            <h1>
              Hello, I'm <span>Sơn</span>
            </h1>
            <p>A front-end Developer</p>
          </div>
          <div className="about-page__objective">
            <h4>
              <b>OBJECTIVE</b>
            </h4>
            <p>{about.objective}</p>
          </div>
          <div className="about-page__description">
            <h4>
              <b>SOME FACTS</b>
            </h4>
            <ul>
              {about.facts.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="about-page__description">
            <h4>
              <b>SOME TRIVIAS</b>
            </h4>
            <ul>
              {about.trivias.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutPage;
