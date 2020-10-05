import React, { ReactElement, ReactNode } from "react";
import "./TimelineCard.scss";
interface Props {
  children: ReactNode;
  time: string;
  place: string;
  achievement: string;
  desc: string;
}

function TimelineCard(props: Props): ReactElement {
  const { children, time, place, achievement, desc } = props;
  return (
    <div className="timeline-card">
      <div className="timeline-card__logo">{children}</div>
      <div className="timeline-card__time">{time}</div>
      <div className="timeline-card__achievement">{achievement}</div>
      <div className="timeline-card__place">{place}</div>
      <div className="timeline-card__desc">{desc}</div>
    </div>
  );
}

export default TimelineCard;
