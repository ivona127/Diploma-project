import {useEffect, useState} from 'react';

const CurrentTime = () => {
    const [time, setTime] = useState(null);

    useEffect(() => {
        const getTime = () => {
            setTime(new Date().toLocaleTimeString());
        };

        getTime();
    }, []);

    return time;
};

export default CurrentTime;