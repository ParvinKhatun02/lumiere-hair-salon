import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const Calendar = ({ onDateSelect }) => {
  const [selected, setSelected] = useState();

  const handleSelect = (date) => {
    setSelected(date);
    onDateSelect?.(date);
  };

  return (
    
<div className="w-full max-w-[280px] rounded-xl border border-[#e5d6cc] bg-[#fffaf5] p-2">
  <h2 className="mb-1 font-['Cormorant_Garamond'] text-2xl text-[#35251f] ">
    Choose Your Date
  </h2>

  
<DayPicker
  mode="single"
  selected={selected}
  onSelect={handleSelect}
  disabled={{ before: new Date() }}
  className="font-['Cormorant_Garamond'] text-sm font-bold"
  modifiersClassNames={{
    selected: "bg-[#7F2D1D] text-white rounded-full",
  }}
  styles={{
    root: {
      margin: "0 auto",
      width: "100%",
    },
    month: {
      width: "100%",
    },
    month_grid: {
      width: "100%",
      tableLayout: "fixed",
      borderCollapse: "collapse",
    },
    weekdays: {
      width: "100%",
      
    },
    weekday: {
      padding: "2px 0",
      textAlign: "center",
    },
    day: {
      width: "32px",
      height: "32px",
      padding: 0,
      textAlign: "center",
    },
    button_previous: {
      width: "28px",
      height: "28px",
    },
    button_next: {
      width: "28px",
      height: "28px",
    },
  }}
/>



  {selected && (
    <p className="mt-1 text-xs text-[#7F2D1D]">
      Selected: {selected.toLocaleDateString("en-IN")}
    </p>
  )}
</div>


  );
};

export default Calendar;
