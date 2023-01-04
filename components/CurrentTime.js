import { useEffect, useState } from "react";

const CurrentTime = () => {
    const [time, setTime] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const getTime = () => {
        setTime(new Date().toString());
        setRefresh(true);
    };

    useEffect(() => {
        getTime();
        console.log(time);
    }, [refresh]);
}

export default CurrentTime;
