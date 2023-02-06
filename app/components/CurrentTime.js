import { useEffect, useState } from "react";

const CurrentTime = (props) => {
    const [time, setTime] = useState(null);
    const [refresh, setRefresh] = useState();

    const getTime = () => {
        setTime(new Date().toLocaleTimeString());
        setRefresh(true);
    };

    useEffect(() => {
        getTime();
        // console.log(time);
    }, [refresh]);

    return time ;
};

export default CurrentTime;
