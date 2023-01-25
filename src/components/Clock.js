import { useState } from "react";

function Clock() {
    const [time,setTime] = useState(new Date());
    setInterval(
        setTime(new Date()),
        1000
    )
    return (
        <div className="app-clock-clock">
            <h1> {time.toLocaleTimeString()} </h1> 
        </div>
    );
}

export default Clock;