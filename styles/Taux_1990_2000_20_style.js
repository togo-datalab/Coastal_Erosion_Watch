var size = 0;
var placement = 'point';

var style_Taux_1990_2000_20 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("EPR1");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -100.000000 && value <= -0.250000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.4 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.250000 && value <= 0.250000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.4 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(213,238,51,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.250000 && value <= 8.910000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.4 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(31,120,180,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
