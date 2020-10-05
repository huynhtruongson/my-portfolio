import Container from "components/Container";
import React, { ReactElement, useState } from "react";
import FolderCard from "./components/FolderCard";
import classNames from "classnames";
import { ToTopOutlined } from "@ant-design/icons";
import "./Work.scss";
import work from "data/work";
interface Props {}

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) =>
  obj[key];

function WorkPage(props: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({} as any);
  const handleFolderClick = (key: any, index: number) => {
    const newData = getKeyValue(work)(key)[index];
    setData(newData);
    setIsOpen(true);
  };
  const handleBackClick = () => {
    setIsOpen(false);
    setData({});
  };
  return (
    <Container title="My Work" classname="work-page-container">
      <div className="work-page">
        <div
          className={classNames("work-page__detail", {
            "work-page__detail--active": isOpen,
          })}
        >
          {isOpen ? (
            <div>
              <div className="work-page__detail__title">
                <ToTopOutlined className="icon" onClick={handleBackClick} />
                <h1>{data.title}</h1>
                <p>{data.time}</p>
              </div>
              <div className="work-page__detail__introduce">
                <i>{data.intro}</i>
                <p>{data.desc}</p>
              </div>
              <div className="work-page__detail__activities">
                {data.activities && (
                  <>
                    <p>My main activities include:</p>
                    <ul>
                      {data.activities.map((x: string) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </>
                )}
                {data.features && (
                  <>
                    <p>Main features include:</p>
                    <ul>
                      {data.features.map((x: string) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              {data.github && (
                <p>
                  Link github: 
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.github}
                  </a>
                </p>
              )}
              <div className="work-page__detail__technology">
                Technology stacks: {data.techs}
              </div>
            </div>
          ) : (
            <h2 className="work-page__detail__label">Select a folder</h2>
          )}
        </div>
        <div
          className={classNames("work-page__category", {
            "work-page__category--active": !isOpen,
          })}
        >
          {Object.keys(work).map((key: any) => (
            <div key={key}>
              <div className="work-page__category__title">{key}</div>
              <div className="work-page__category__list">
                {(getKeyValue(work)(key) as Array<any>).map(
                  (x: any, i: number) => (
                    <div
                      key={x.title}
                      className="work-page__category__list__folder"
                    >
                      <FolderCard
                        onClick={() => handleFolderClick(key, i)}
                        image={x.logo}
                        classname={
                          x.title === data.title
                            ? "folder-card__front--active"
                            : ""
                        }
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default WorkPage;
