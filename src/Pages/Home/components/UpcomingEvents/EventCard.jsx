import React from "react";
import styles from "./Events.module.css";

const EventCard = ({ data }) => {
  return (
    <div className={styles["event-card"]}>
      <div className={styles["event-card__top"]}>
        <img src={data.img} alt="student" />
      </div>
      <div className={styles["event-card__bottom"]}>
        <p className="text-uppercase text-light fs-13">{data.category}</p>
        <p>{data.name}</p>
        <p>{data.time}</p>
      </div>
      <div className={styles["event-card__date"]}>
        <p>{data.date.month}</p>
        <p className={styles["event-card__date__day"]}>{data.date.day}</p>
      </div>
    </div>
  );
};

export default EventCard;
