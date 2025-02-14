import React from 'react'
import {Calendar} from "../../components/ui/calendar"
const Calender = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
<>
<Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="border"
  />
</>
)
}
export default Calender
