import Container from "components/Container";
import skills from "data/skills";
import React, { ReactElement } from "react";
import ProgressCircle from "./components/ProgressCircle";
import "./Skills.scss";
interface Props {}

function SkillsPage(props: Props): ReactElement {
  return (
    <Container title="Skills Metrics">
      <div className="skills-pages">
        {skills.map((x,i) => (
          <div className="skill-category" key={i}>
            <div className="skill-category__title">{x.categoryName}</div>
            <div className="skill-category__list">
              {x.skills.map((x) => (
                <ProgressCircle
                  key={x.name}
                  label={x.name}
                  img={x.img}
                  percent={x.percent}
                  color={x.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default SkillsPage;
