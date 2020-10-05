import React, { ReactElement } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "../ProgressProvider";
import "./ProgressCircle.scss";
interface Props {
  img: string;
  percent: number;
  color: string;
  label: string;
}

function ProgressCircle(props: Props): ReactElement {
  const { img, percent, color, label } = props;
  return (
    <ProgressProvider valueStart={0} valueEnd={percent}>
      {(value) => (
        <div className="progress-circle">
          <div className='progress-circle__item'>
            <CircularProgressbarWithChildren
              // className="progress-circle__item"
              value={value}
              styles={{ path: { stroke: color } }}
            >
              <img src={img} alt="" className='progress-circle__item__img'/>
              <span className='progress-circle__item__percent'>{percent}%</span>
            </CircularProgressbarWithChildren>
          </div>
          <p>{label}</p>
        </div>
      )}
    </ProgressProvider>
  );
}

export default ProgressCircle;
