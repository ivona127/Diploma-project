import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const CurrentLocation = () =>{
    const [location, setLocation] = useState(null);
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

        let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000, timeout: 20000});
        setLocation(location);
        setRefresh(true);
    }

    useEffect(() => {
        getLocation();
        console.log(location);
    }, [refresh]);


}

export default CurrentLocation;

