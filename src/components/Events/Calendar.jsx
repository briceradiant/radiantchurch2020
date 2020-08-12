import React, { useState } from "react"
import Calendar from "react-calendar"
import Moment from "moment"
import moment from "moment-recur"

import "react-calendar/dist/Calendar.css"
import "./Calendar.module.scss"

const EventsCalendar = props => {
  const { data } = props
  const [date, setDate] = useState(new Date())
  const formattedDate = new Moment(date)
  const myDate = formattedDate.format("MM/DD/YYYY")
  console.log(
    moment().recur({
      start: "01/01/2021",
      end: "01/01/2022",
    })
  )

  return (
    <section className="calendar pad">
      <div className="wrapper lg center-text">
        <Calendar
          onChange={date => setDate(date)}
          value={date}
          calendarType="US"
          tileContent={({ date }) => {
            const month = date.getMonth() + 1
            const newMonthZero = month < 10 ? "0" + month : month
            const year = date.getFullYear()
            const day = date.getDate()
            const newDayZero = day < 10 ? "0" + day : day
            const dotw = date.getDay()
            const tileDate = `${year}-${newMonthZero}-${newDayZero}`
            return data.map(({ node }, index) => {
              const eventStartDate = node.start_date.split("T")[0]
              // console.log(tileDate);
              switch (eventStartDate) {
                case tileDate:
                  return <span>{node.title}</span>
              }
            })
          }}
        />
      </div>
    </section>
  )
}

export default EventsCalendar
