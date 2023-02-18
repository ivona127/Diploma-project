import {useState, useEffect} from 'react';
import * as Location from 'expo-location';

const CurrentLocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        async function getLocation (){
            try {
                let result = await Location.getCurrentPositionAsync({ 
                    accuracy: Location.Accuracy.Highest, 
                    maximumAge: 10000, 
                    timeout: 20000 
                });
    
                setLatitude(result.coords.latitude);
                setLongitude(result.coords.longitude);
            } catch (error) {
                console.log('Error getting location:', error);
            }
        }
    
        getLocation();
    }, []);

    return {latitude, longitude};
}

export default CurrentLocation;