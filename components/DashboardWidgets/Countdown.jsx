import React from "react";
import { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="widget_container">
      <h3>Countdown</h3>
      <div className="countdown_container">
        <div className="countdown_value_container">
          <span className="countdown_value">{timeLeft.days}</span>
          <span className="countdown_value_category">Days</span>
        </div>
        <div className="countdown_value_container">
          <span className="countdown_value">{timeLeft.hours}</span>
          <span className="countdown_value_category">Hours</span>
        </div>
        <div className="countdown_value_container">
          <span className="countdown_value">{timeLeft.minutes}</span>
          <span className="countdown_value_category">Minutes</span>
        </div>
        <div className="countdown_value_container">
          <span className="countdown_value">{timeLeft.seconds}</span>
          <span className="countdown_value_category">Seconds</span>
        </div>
      </div>
    </div>
  );
}
