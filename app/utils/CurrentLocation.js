import {useEffect, useState} from 'react';
import * as Location from 'expo-location';

const CurrentLocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        async function getLocation (){
            try {
                let result = await Location.getCurrentPositionAsync({  
                    accuracy: Location.Accuracy.Highest, // Specifies the desired accuracy level for the location data 
                    maximumAge: 10000, // Specifies the maximum age (in milliseconds) of the cached location data to be returned
                    timeout: 20000 // Specifies the maximum time (in milliseconds) to wait for the location data before timing out
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