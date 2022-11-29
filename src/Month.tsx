import React from 'react';
import Week from './Week';

interface MonthProps {
  year: number;
  month: number;
  compact: boolean;
}

// get the day in the week with monday as the first day
function getDayInWeek(year: number, month: number, day: number) {
  const date = new Date(year, month, day);
  const dayInWeek = date.getDay();
  return dayInWeek === 0 ? 6 : dayInWeek - 1;
}

function Month(props: MonthProps) {
  const monthName = new Date(props.year, props.month).toLocaleString('default', { month: 'long' });
  // get number of mo-so weeks in the month
  const weeks = Math.ceil((new Date(props.year, props.month + 1, 0).getDate() + getDayInWeek(props.year, props.month, 1)) / 7);

  return (
    <div className='month'>
      {!props.compact && monthName}
      <table border={props.compact ? 0 : 1} cellPadding={2} cellSpacing={0}>
        <tbody>
          {!props.compact && <Week header={true} />}
          {
            Array.from(Array(weeks).keys()).map((week, index) => (
              <Week
                key={index}
                compact={props.compact}
                from={week === 0 ? getDayInWeek(props.year, props.month, 1) : 0}
                to={week === weeks - 1 ? getDayInWeek(props.year, props.month + 1, 0) : 6}
                year={props.year}
                month={props.month}
                start={week * 7 - getDayInWeek(props.year, props.month, 1)}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Month;
