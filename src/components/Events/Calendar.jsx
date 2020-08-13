import React, { useState, useEffect } from "react"
import Calendar from "react-calendar"
import Moment from "moment"
// import moment from "moment-recur"

import "react-calendar/dist/Calendar.css"
import "./Calendar.module.scss"

const parseDate = str => {
  let mdy = str.split("/")
  return new Date(mdy[2], mdy[0] - 1, mdy[1])
}

const dateDiffByWeek = (first, second) => {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round((second - first) / (1000 * 60 * 60 * 24) / 7)
}

const EventsCalendar = props => {
  const { data } = props
  const events = data
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    //handles recurring events on mount
    const initialRecurringArr = data.filter(({ node }) => {
      return node.recurring_event
    })
    initialRecurringArr.map(({ node }) => {
      const initialStartDate = new Moment(node.start_date)
      const initialEndDate = new Moment(node.end_date)
      const formattedInitialStartDate = initialStartDate.format("MM/DD/YYYY")
      const yearFromStart = node.recurring_end_date
        ? new Moment(node.recurring_end_date).format("MM/DD/YYYY")
        : initialStartDate.add(1, "years").format("MM/DD/YYYY")
      const startAndYearDiff = dateDiffByWeek(
        parseDate(formattedInitialStartDate),
        parseDate(yearFromStart)
      )
      for (let i = 1; i <= startAndYearDiff; i++) {
        const { title, recurring_frequency, description } = node
        events.push({
          node: {
            title: title,
            start_date: initialStartDate
              .add(recurring_frequency, "d")
              .toISOString()
              .replace(".000", ""),
            end_date: initialEndDate
              .add(recurring_frequency, "d")
              .toISOString()
              .replace(".000", ""),
            description: description,
          },
        })
      }
    })
    console.log(events)
  }, [])

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
            return events.map(({ node }, index) => {
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
