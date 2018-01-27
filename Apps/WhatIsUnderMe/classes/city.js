class City {
    constructor(cityName, city_ascii, lat, lng, pop, country, iso2, iso3, province) {
        this.cityName = cityName,
        this.city_ascii = city_ascii
        this.lat = lat,
        this.lng = lng,
        this.pop = pop,
        this.country = country
        this.iso2 = iso2,
        this.iso3 = iso3,
        this.province = province
    }

    calculateAntipode() {
        // flip latitude
        let antLat = this.lat * -1;
        
        // flip longitude
        let antLng;
        let sign = Math.sign(this.lng);
        if(sign == 1){
            antLng = (-180) + this.lng;
        } else if (sign == -1){
            antLng = 180 + this.lng;
        }

        let antipode = {
            "lat": antLat, 
            "lng": antLng
        }

        return antipode;
    }


    addCityToMap(city, viewer){
        // Add some points
        var pointEntity = viewer.entities.add({
        name : city.cityName,
        position : Cesium.Cartesian3.fromDegrees(city.lng, city.latx),
        point : {
            pixelSize : 5,
            color : Cesium.Color.RED,
            outlineColor : Cesium.Color.WHITE,
            outlineWidth : 2
        },
        label : {
            text : city.cityName,
            font : '14pt monospace',
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth : 2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
            pixelOffset : new Cesium.Cartesian2(0, -9)
        }
        });

        return pointEntity;
    }
}