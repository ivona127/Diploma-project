import {useEffect, useState} from 'react';

const Stopwatch = () => {
    const [end, setEnd] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            console.log(seconds);
        }, 1000);

        if (seconds == 20) {
            setEnd(true);
        } else if (seconds > 20) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [seconds]);

    return end;
}

export default Stopwatch;