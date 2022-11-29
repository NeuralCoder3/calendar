import React from 'react';

type DayProps =
  {
    year: number;
    month: number;
    date: number;
    compact: boolean;
  } | {
    inactive: true;
    compact: boolean;
  }


function Day(props: DayProps) {
  if ('inactive' in props) {
    return (
      <td className='date inactive' >
        {!props.compact && " "}
      </td>
    );
  } else {
    const date = new Date(props.year, props.month, props.date + 1);
    const past = date < new Date();
    return (
      <td className={"date " + (past ? "past" : "future")}>
        {!props.compact && (props.date + 1)}
      </td>
    );
  }
}

export default Day;
