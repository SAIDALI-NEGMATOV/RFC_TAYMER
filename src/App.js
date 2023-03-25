import React from "react";
import { useState } from "react";

export default function App() {
  // const [number, setNumber] = useState(0);

  let [second, setSecond] = useState(0);
  let [minute, setMinute] = useState(0);
  let [hour, setHour] = useState(0);
  let [Active, setActive] = useState(false);
  let [Time, setTime] = useState(clearInterval);
  let [Inter, setInter] = useState([]);

  const PluseBtnOne = () => {
    hour++;
    setHour(hour);
  };
  const MinuseBtnOne = () => {
    hour--;
    setHour(hour);
    if (hour == 0) {
      setHour(hour - 0);
    }
  };

  const PluseBtnTwo = () => {
    minute++;
    setMinute(minute);
  };
  const MinuseBtnTwo = () => {
    minute--;
    setMinute(minute);
    if (minute >= 0) {
      setMinute(minute - 0);
    }
  };
  const PluseBtnThree = () => {
    second++;
    setSecond(second);
  };
  const MinuseBtnThree = () => {
    second--;
    setSecond(second);
    if (second >= 0) {
      second--;
      setSecond(second);
    }
  };

  const Start = () => {
    setActive(true);
    Time = setInterval(() => {
      second--;
      setSecond(second);
      if (minute <= 59 && second < 1) {
        minute--;
        second = 59;
        setMinute(minute);
        setSecond(second);
        if (hour > 0 && minute <1) {
          hour--
          minute=59
          second=59
          setHour(hour)
          setMinute(minute);
        setSecond(second);
        } 
      }
      // else if (hour > 0) {
      //   hour--;
      //   minute = 59;
      //   second = 59;
      //   setMinute(minute);
      //   setSecond(second);
      //   setHour(hour);
      // } else if ((hour = 0)) {
      //   hour = 0;
      //   minute = 59;
      //   second = 59;
      //   setMinute(minute);
      //   setSecond(second);
      //   setHour(hour);
      // }
    }, 1);

    setTime(Time);
  };

  const Stop = () => {
    setActive(false);
    clearInterval(Time);
  };

  const Interval = () => {
    let a = `${hour} : ${minute} : ${second}`;

    Inter.push(a);
    setInter(Inter);
  };

  const Clear = () => {
    hour = 0;
    minute = 0;
    second = 0;
    Inter = [""];
    setInter(Inter);
    setHour(hour);
    setMinute(minute);
    setSecond(second);
    clearInterval(Time);
    setActive(false);
  };

  return (
    <div
      className="Container"
      style={{
        widows: "100%",
        height: "100vh",
        backgroundColor: "#ccc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="Box"
        style={{
          width: "80%",
          gap: "20px",
          height: "300px",
          backgroundColor: "aqua",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <button onClick={PluseBtnOne}>+</button>
          </div>
          <div>
            <h2>{hour <= 9 ? "0" + hour : hour}</h2>
          </div>
          <div>
            <button onClick={MinuseBtnOne}>-</button>
          </div>
        </div>
        <div
          className="content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <button onClick={PluseBtnTwo}>+</button>
          </div>
          <div>
            <h2>{minute <= 9 ? "0" + minute : minute}</h2>
          </div>
          <div>
            <button onClick={MinuseBtnTwo}>-</button>
          </div>
        </div>
        <div
          className="content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <button onClick={PluseBtnThree}>+</button>
          </div>
          <div>
            <h2>{second <= 9 ? "0" + second : second} </h2>
          </div>
          <div>
            <button onClick={MinuseBtnThree}>-</button>
          </div>
        </div>
      </div>
      <div style={{ gap: "20px" }}>
        <button
          onClick={Start}
          disabled={Active}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "0px",
            marginTop: "10px",
          }}
        >
          Start
        </button>{" "}
        <button
          onClick={Stop}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "0px",
            marginTop: "10px",
          }}
        >
          Stop
        </button>
        <button
          onClick={Interval}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "0px",
            marginTop: "10px",
            marginLeft: "10px",
          }}
        >
          interval
        </button>
        <button
          onClick={Clear}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "0px",
            marginTop: "10px",
            marginLeft: "10px",
          }}
        >
          Clear
        </button>
      </div>
      <div className="interval">
        {Inter.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
