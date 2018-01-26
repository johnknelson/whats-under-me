class Location {
    constructor(lat, lng) {
        this.lat = lat
        this.lng = lng
    }
}

function addLocationToMap(lat, lng, label, viewer){
    // Add some points
    var pointEntity = viewer.entities.add({
      name : 'Citizens Bank Park',
      position : Cesium.Cartesian3.fromDegrees(lat, lng),
      point : {
          pixelSize : 5,
          color : Cesium.Color.RED,
          outlineColor : Cesium.Color.WHITE,
          outlineWidth : 2
      },
      label : {
          text : 'Citizens Bank Park',
          font : '14pt monospace',
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          outlineWidth : 2,
          verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
          pixelOffset : new Cesium.Cartesian2(0, -9)
      }
    });

    return pointEntity;
}


// requirejs speak
define( function () {
    //You can name this function here,
    //which can help in debuggers but
    //has no impact on the module name.
    return function Location(lat, lng) {
        this.lat = lat
        this.lng = lng
    };
});