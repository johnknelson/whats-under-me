function getCityFromLocation(location){
    let city = new City();
}

function getClosestCity(userAntipode, cityArray){
    let closestCity = null;
    let closestDistance = null;

    let userCartesian3 = new Cesium.Cartesian3.fromDegrees(userAntipode.lng, userAntipode.lat);

    let cityInitCartesian3 = new Cesium.Cartesian3.fromDegrees(cityArray[0].lng, cityArray[0].lat);
    let distanceInit = Cesium.Cartesian3.distance(cityInitCartesian3, userCartesian3);
    closestDistance = distanceInit;

    for(let i = 1; i < cityArray.length; i++){
        let cityCartesian3 = new Cesium.Cartesian3.fromDegrees(cityArray[i].lng, cityArray[i].lat);

        let distance = Cesium.Cartesian3.distance(cityCartesian3, userCartesian3);
        if(distance < closestDistance){
            closestDistance = distance;
            closestCity = cityArray[i];
        }
    }

    return closestCity;
}