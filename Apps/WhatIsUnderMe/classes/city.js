class City {
    constructor(city, city_ascii, lat, lng, pop, country, iso2, iso3, province) {
        this.city = city,
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
}

// requirejs speak
define(["./location"], function (city, city_ascii, lat, lng, pop, country, iso2, iso3, province){
    this.city = city,
    this.city_ascii = city_ascii
    this.lat = lat,
    this.lng = lng,
    this.pop = pop,
    this.country = country
    this.iso2 = iso2,
    this.iso3 = iso3,
    this.province = province

    this.calculateAntipode = function(lat, lng){
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

        let antipode = new Location(antLat, antLng);

        return antipode;
    }
})
