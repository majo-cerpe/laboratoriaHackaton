import React, { Fragment } from 'react'
import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-basic.css";

class CalendarComponent extends React.Component {
  componentDidMount() {
    new Calendar({
        id: "#calendar-a",
        theme: "basic",
        // border: "5px solid black",
        weekdayType: "long-upper",
        monthDisplayType: "short",
        // headerColor: "yellow",
        // headerBackgroundColor: "black",
        calendarSize: "small",
        layoutModifiers: ["month-left-align"],
        eventsData: [
          {
            id: 1,
            name: "Hackaton",
            start: "2021-10-27T06:00:00",
            end: "2021-10-28T20:30:00"
          },
          {
            id: 2,
            name: "Clases de piano",
            start: "2021-10-28T10:00:00",
            end: "2021-10-28T11:30:00"
          },
          {
            id: 3,
            name: "Codear",
            start: "2021-10-28T10:00:00",
            end: "2021-10-29T11:30:00"
          },
          {
            id: 4,
            name: "Entrevista",
            start: "2021-10-30T10:00:00",
            end: "2021-10-31T11:30:00"
          }
      ],
      dateChanged: (currentDate, events) => {
        console.log("date change", currentDate, events);
      },
      monthChanged: (currentDate, events) => {
        console.log("month change", currentDate, events);
      }
    });
  }

  render() {
    return <div id="calendar-a"></div>;
  }
}

export default CalendarComponent;