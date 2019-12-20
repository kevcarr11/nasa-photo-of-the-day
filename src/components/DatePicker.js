import React from 'react'

function DatePicker(props) {
  
  let d = new Date();
  function twoDigitDate(d) {
    return ((d.getDate()).toString().length === 1) ? "0" + (d.getDate()).toString() : (d.getDate()).toString();
  };
  function twoDigitMonth(d) {
    return ((d.getMonth() + 1).toString().length === 1) ? "0" + (d.getMonth() + 1).toString() : (d.getMonth() + 1).toString();
  };
  let today = d.getFullYear() + "-" + twoDigitMonth(d) + "-" + twoDigitDate(d);

  return (
    <div>
       <label className="pText" >Choose a Date:
       <input className="datePicker" onChange={(e) => props.setDate(e.target.value)} id="date-input" type="date" value={props.date || today} name="date-picker" max={today} ></input>
       </label>
    </div>
  )
}

export default DatePicker
