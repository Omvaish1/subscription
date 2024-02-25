import { useState } from "react";
import { Seats } from "./Seats";
import { Purchase } from "./Purchase";
import { Statistics } from "./Statistics";
import { Details } from "./Details";
import { Duration } from "./Duration";
import { Sidebar } from "./Sidebar";

export function Content() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="outer-box">
      <Sidebar />
      <div>
        <div className="subscription-pricing">
          <div className="content">
            <Seats
              styleId={"left"}
              number={200}
              text={"Number of seats purchased"}
            />
            <div>
              <div className="center-seat">
                <Seats
                  styleId={"center"}
                  number={160}
                  text={"Number of seats used"}
                />
              </div>
              <button onClick={handleClick}>Buy More Seats</button>
            </div>
            <Seats
              styleId={"right"}
              number={40}
              text={"Number of seats remaining"}
            />
          </div>
          {isOpen && <Purchase />}
        </div>
        <div className="statistics">
          <div className="division">
            <Statistics
              heading={"No. of group calls Purchased"}
              prov1={10}
              prov2={16}
              styleId={"left"}
            />
          </div>
          <Statistics
            heading={"No. of group calls Remaining"}
            prov1={8}
            prov2={12}
            styleId={"center"}
          />
        </div>
      </div>
      <div>
        <Details />
        <Duration />
      </div>
    </div>
  );
}
