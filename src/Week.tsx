import React from 'react';
import Day from './Day';

type WeekProps =
  {
    year: number;
    month: number;
    start: number;
    from: number;
    to: number;
    compact: boolean;
  } | {
    header: true;
  }


function Week(props: WeekProps) {
  if ('header' in props) {
    return (
      <tr>
        <th>Mo</th>
        <th>Di</th>
        <th>Mi</th>
        <th>Do</th>
        <th>Fr</th>
        <th>Sa</th>
        <th>So</th>
      </tr>
    );
  } else {
    const days = Array.from(Array(7).keys());
    return (
      <tr>
        {
          days.map((day, index) => (
            props.from <= day && day <= props.to ?
              <Day
                key={index}
                year={props.year}
                month={props.month}
                date={props.start + day}
                compact={props.compact}
              />
              :
              <Day
                key={index}
                inactive={true}
                compact={props.compact}
              />
          ))
        }
      </tr>
    );
    // <div key={index} className={"date " + (day >= props.from && day <= props.to ? "active" : "")} />
  }
}

export default Week;
