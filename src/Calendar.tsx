import { Grid } from '@mui/material';
import React from 'react';
import Month from './Month';

interface CalendarProps {
  year: number;
  compact: boolean;
}

function Calendar(props: CalendarProps) {
  const rows = [];
  let row = [];
  for (let i = 0; i < 12; i++) {
    row.push(i);
    if (row.length === 3) {
      rows.push(row);
      row = [];
    }
  }

  return (
    <div className='calendar'>
      <h1>Calendar {props.year}</h1>
      <div>
        {
          rows.map((row, index) => (
            <Grid container spacing={props.compact ? 0 : 2} key={index}>
              {
                row.map((month, index) => (
                  <Grid item xs={props.compact ? 0 : 4} key={index}>
                    <Month year={props.year} month={month} compact={props.compact} />
                  </Grid>
                ))
              }
            </Grid>
          ))
        }
      </div>
    </div>
  );
}

export default Calendar;
