import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const CurrentLocation = () =>{
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [refresh, setRefresh] = useState(false);

    async function getLocation (){
        let status = await Location.requestForegroundPermissionsAsync();
    
        if (JSON.stringify(status.granted) !== 'true') {
            Alert.alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
              );
              return;
        }

        let result = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000, timeout: 20000});
        setLatitude(result.coords.latitude);
        setLongitude(result.coords.longitude);
        setRefresh(true);
    }

    useEffect(() => {
        getLocation();
        console.log(latitude);
        console.log(longitude);
    }, [refresh]);

    return { longitude, latitude };
}

export default CurrentLocation;

