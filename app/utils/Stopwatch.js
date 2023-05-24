import {useEffect, useState} from 'react';

const Stopwatch = () => {
    const [end, setEnd] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Create an interval that increments the seconds by 1 every 1000 milliseconds (1 second)
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        if (seconds == 20) {
            // If the seconds reach 20, set the end state to true
            setEnd(true);
        } else if (seconds > 20) {
            // If the seconds exceed 20, clear the interval to stop the stopwatch
            clearInterval(interval);
        }

        // Cleanup function that clears the interval when the component unmounts or the dependency array changes
        return () => clearInterval(interval);
    }, [seconds]);

    return end;
}

export default Stopwatch;