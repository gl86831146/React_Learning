import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formartTime = (date) => {
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <div>
      <h2>北京时间：{formartTime(time)}</h2>
    </div>
  );
};

export default Time;
