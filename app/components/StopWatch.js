import { useState, useEffect } from 'react';

const StopWatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [end, setEnd] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            console.log(seconds);
        }, 1000);
        
        if(seconds == 10) {
           setEnd(true);
        } else if (seconds > 20){
           clearInterval(interval); 
        }
        return () => clearInterval(interval); 
    }, [seconds]);

    return end;
}
export default StopWatch;