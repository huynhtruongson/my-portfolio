import Container from "components/Container";
import education from "data/education";
import React, { ReactElement } from "react";
import TimelineCard from "./components/TimelineCard";
import './Education.scss'
interface Props {}

function EducationPage({}: Props): ReactElement {
  return (
    <Container title="Education" classname='education-page-container'>
      <div className="education-page">
        {education.map((x) => (
          <TimelineCard
            time={x.time}
            achievement={x.achievement}
            place={x.place}
            desc={x.desc}
          >
            <x.icon className="timeline-card__logo__icon" />
          </TimelineCard>
        ))}
      </div>
    </Container>
  );
}

export default EducationPage;
