class Location {
    constructor(lat, lng) {
        this.lat = lat
        this.lng = lng
    }

    addLocationToMap(){
        var pointEntity = viewer.entities.add({
            name : "userAntipode",
            position : Cesium.Cartesian3.fromDegrees(this.lng, this.lat),
            point : {
                pixelSize : 5,
                color : Cesium.Color.RED,
                outlineColor : Cesium.Color.WHITE,
                outlineWidth : 2
            },
            label : {
                text : "Your Antipode!!!",
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