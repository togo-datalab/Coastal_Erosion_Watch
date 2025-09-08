var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TOGO_1 = new ol.format.GeoJSON();
var features_TOGO_1 = format_TOGO_1.readFeatures(json_TOGO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOGO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOGO_1.addFeatures(features_TOGO_1);
var lyr_TOGO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOGO_1, 
                style: style_TOGO_1,
                popuplayertitle: 'TOGO',
                interactive: false,
                title: '<img src="styles/legend/TOGO_1.png" /> TOGO'
            });
var format_Cantonsdulittoral_2 = new ol.format.GeoJSON();
var features_Cantonsdulittoral_2 = format_Cantonsdulittoral_2.readFeatures(json_Cantonsdulittoral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantonsdulittoral_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantonsdulittoral_2.addFeatures(features_Cantonsdulittoral_2);
var lyr_Cantonsdulittoral_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantonsdulittoral_2, 
                style: style_Cantonsdulittoral_2,
                popuplayertitle: 'Cantons du littoral',
                interactive: true,
                title: '<img src="styles/legend/Cantonsdulittoral_2.png" /> Cantons du littoral'
            });
var format_Etat_cteTOGOJuillet2025_3 = new ol.format.GeoJSON();
var features_Etat_cteTOGOJuillet2025_3 = format_Etat_cteTOGOJuillet2025_3.readFeatures(json_Etat_cteTOGOJuillet2025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etat_cteTOGOJuillet2025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etat_cteTOGOJuillet2025_3.addFeatures(features_Etat_cteTOGOJuillet2025_3);
var lyr_Etat_cteTOGOJuillet2025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etat_cteTOGOJuillet2025_3, 
                style: style_Etat_cteTOGOJuillet2025_3,
                popuplayertitle: 'Etat_côte-TOGO Juillet 2025',
                interactive: true,
                title: '<img src="styles/legend/Etat_cteTOGOJuillet2025_3.png" /> Etat_côte-TOGO Juillet 2025'
            });
var format_Superficie_perduegagne_4 = new ol.format.GeoJSON();
var features_Superficie_perduegagne_4 = format_Superficie_perduegagne_4.readFeatures(json_Superficie_perduegagne_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Superficie_perduegagne_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficie_perduegagne_4.addFeatures(features_Superficie_perduegagne_4);
var lyr_Superficie_perduegagne_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficie_perduegagne_4, 
                style: style_Superficie_perduegagne_4,
                popuplayertitle: 'Superficie_perdue/gagnée',
                interactive: true,
    title: 'Superficie_perdue/gagnée<br />\
    <img src="styles/legend/Superficie_perduegagne_4_0.png" /> Accretion<br />\
    <img src="styles/legend/Superficie_perduegagne_4_1.png" /> Erosion<br />' });
var format_Hotspots_5 = new ol.format.GeoJSON();
var features_Hotspots_5 = format_Hotspots_5.readFeatures(json_Hotspots_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotspots_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotspots_5.addFeatures(features_Hotspots_5);
var lyr_Hotspots_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotspots_5, 
                style: style_Hotspots_5,
                popuplayertitle: 'Hotspots',
                interactive: true,
    title: 'Hotspots<br />\
    <img src="styles/legend/Hotspots_5_0.png" /> Faible<br />\
    <img src="styles/legend/Hotspots_5_1.png" /> Modéré<br />' });
var format_Taux_20202025_6 = new ol.format.GeoJSON();
var features_Taux_20202025_6 = format_Taux_20202025_6.readFeatures(json_Taux_20202025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taux_20202025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_20202025_6.addFeatures(features_Taux_20202025_6);
var lyr_Taux_20202025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_20202025_6, 
                style: style_Taux_20202025_6,
                popuplayertitle: 'Taux_2020-2025',
                interactive: true,
    title: 'Taux_2020-2025<br />\
    <img src="styles/legend/Taux_20202025_6_0.png" /> -15.1 à -0.25 (érosion)<br />\
    <img src="styles/legend/Taux_20202025_6_1.png" /> -0.25 à 0.24 (stabilité)<br />\
    <img src="styles/legend/Taux_20202025_6_2.png" /> 0.44 à 13.21 (accretion)<br />' });
var format_Mesures_protection_7 = new ol.format.GeoJSON();
var features_Mesures_protection_7 = format_Mesures_protection_7.readFeatures(json_Mesures_protection_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesures_protection_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_7.addFeatures(features_Mesures_protection_7);
var lyr_Mesures_protection_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_7, 
                style: style_Mesures_protection_7,
                popuplayertitle: 'Mesures _protection',
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_7.png" /> Mesures _protection'
            });
var format_Hot_spot_8 = new ol.format.GeoJSON();
var features_Hot_spot_8 = format_Hot_spot_8.readFeatures(json_Hot_spot_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hot_spot_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hot_spot_8.addFeatures(features_Hot_spot_8);
var lyr_Hot_spot_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hot_spot_8, 
                style: style_Hot_spot_8,
                popuplayertitle: 'Hot_spot',
                interactive: true,
    title: 'Hot_spot<br />\
    <img src="styles/legend/Hot_spot_8_0.png" /> Elevé<br />' });
var format_Taux_20202025_9 = new ol.format.GeoJSON();
var features_Taux_20202025_9 = format_Taux_20202025_9.readFeatures(json_Taux_20202025_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taux_20202025_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_20202025_9.addFeatures(features_Taux_20202025_9);
var lyr_Taux_20202025_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_20202025_9, 
                style: style_Taux_20202025_9,
                popuplayertitle: 'Taux_2020-2025',
                interactive: true,
    title: 'Taux_2020-2025<br />\
    <img src="styles/legend/Taux_20202025_9_0.png" /> 20.08 à -0.25 (érosion)<br />\
    <img src="styles/legend/Taux_20202025_9_1.png" /> -0.37 à 0.24 (stabilité)<br />\
    <img src="styles/legend/Taux_20202025_9_2.png" /> 0.35 à 29.08 (accretion)<br />' });
var format_Mesures_protection_10 = new ol.format.GeoJSON();
var features_Mesures_protection_10 = format_Mesures_protection_10.readFeatures(json_Mesures_protection_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesures_protection_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_10.addFeatures(features_Mesures_protection_10);
var lyr_Mesures_protection_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_10, 
                style: style_Mesures_protection_10,
                popuplayertitle: 'Mesures_protection',
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_10.png" /> Mesures_protection'
            });
var format_Hotspot_11 = new ol.format.GeoJSON();
var features_Hotspot_11 = format_Hotspot_11.readFeatures(json_Hotspot_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotspot_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotspot_11.addFeatures(features_Hotspot_11);
var lyr_Hotspot_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotspot_11, 
                style: style_Hotspot_11,
                popuplayertitle: 'Hot spot',
                interactive: true,
    title: 'Hot spot<br />\
    <img src="styles/legend/Hotspot_11_0.png" /> Faible<br />\
    <img src="styles/legend/Hotspot_11_1.png" /> Modéré<br />\
    <img src="styles/legend/Hotspot_11_2.png" /> Elevé<br />' });
var format_Taux_20102015_12 = new ol.format.GeoJSON();
var features_Taux_20102015_12 = format_Taux_20102015_12.readFeatures(json_Taux_20102015_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taux_20102015_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_20102015_12.addFeatures(features_Taux_20102015_12);
var lyr_Taux_20102015_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_20102015_12, 
                style: style_Taux_20102015_12,
                popuplayertitle: 'Taux_2010-2015',
                interactive: true,
    title: 'Taux_2010-2015<br />\
    <img src="styles/legend/Taux_20102015_12_0.png" /> -26.26 à -0.23 (érosion)<br />\
    <img src="styles/legend/Taux_20102015_12_1.png" /> -0.35 à 0.23 (stabilité)<br />\
    <img src="styles/legend/Taux_20102015_12_2.png" /> 0.35 à 46.24 (accretion)<br />' });
var format_Mesures_protection_13 = new ol.format.GeoJSON();
var features_Mesures_protection_13 = format_Mesures_protection_13.readFeatures(json_Mesures_protection_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesures_protection_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_13.addFeatures(features_Mesures_protection_13);
var lyr_Mesures_protection_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_13, 
                style: style_Mesures_protection_13,
                popuplayertitle: 'Mesures_protection',
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_13.png" /> Mesures_protection'
            });
var format_Hotspot_14 = new ol.format.GeoJSON();
var features_Hotspot_14 = format_Hotspot_14.readFeatures(json_Hotspot_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotspot_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotspot_14.addFeatures(features_Hotspot_14);
var lyr_Hotspot_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotspot_14, 
                style: style_Hotspot_14,
                popuplayertitle: 'Hotspot',
                interactive: true,
    title: 'Hotspot<br />\
    <img src="styles/legend/Hotspot_14_0.png" /> Elevé<br />' });
var format_Taux_20052010_15 = new ol.format.GeoJSON();
var features_Taux_20052010_15 = format_Taux_20052010_15.readFeatures(json_Taux_20052010_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taux_20052010_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_20052010_15.addFeatures(features_Taux_20052010_15);
var lyr_Taux_20052010_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_20052010_15, 
                style: style_Taux_20052010_15,
                popuplayertitle: 'Taux_2005-2010',
                interactive: true,
    title: 'Taux_2005-2010<br />\
    <img src="styles/legend/Taux_20052010_15_0.png" /> -12.81 à -0.63 (érosion)<br />\
    <img src="styles/legend/Taux_20052010_15_1.png" /> -0.13 à 0.21 (stabilité)<br />\
    <img src="styles/legend/Taux_20052010_15_2.png" /> 0.25 à 15.47 (accretion)<br />' });
var format_Mesure_protection_16 = new ol.format.GeoJSON();
var features_Mesure_protection_16 = format_Mesure_protection_16.readFeatures(json_Mesure_protection_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesure_protection_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesure_protection_16.addFeatures(features_Mesure_protection_16);
var lyr_Mesure_protection_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesure_protection_16, 
                style: style_Mesure_protection_16,
                popuplayertitle: 'Mesure_protection',
                interactive: true,
                title: '<img src="styles/legend/Mesure_protection_16.png" /> Mesure_protection'
            });
var format_Hotspot_17 = new ol.format.GeoJSON();
var features_Hotspot_17 = format_Hotspot_17.readFeatures(json_Hotspot_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotspot_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotspot_17.addFeatures(features_Hotspot_17);
var lyr_Hotspot_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotspot_17, 
                style: style_Hotspot_17,
                popuplayertitle: 'Hotspot',
                interactive: true,
    title: 'Hotspot<br />\
    <img src="styles/legend/Hotspot_17_0.png" /> Faible<br />\
    <img src="styles/legend/Hotspot_17_1.png" /> Modéré<br />' });
var format_Taux_20002005_18 = new ol.format.GeoJSON();
var features_Taux_20002005_18 = format_Taux_20002005_18.readFeatures(json_Taux_20002005_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taux_20002005_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_20002005_18.addFeatures(features_Taux_20002005_18);
var lyr_Taux_20002005_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_20002005_18, 
                style: style_Taux_20002005_18,
                popuplayertitle: 'Taux_2000-2005',
                interactive: true,
    title: 'Taux_2000-2005<br />\
    <img src="styles/legend/Taux_20002005_18_0.png" /> -16.51 à -0.25 (érosion)<br />\
    <img src="styles/legend/Taux_20002005_18_1.png" /> -0.25 à 0.09 (stabilité)<br />\
    <img src="styles/legend/Taux_20002005_18_2.png" /> 0.56 à 10.66 (accretion)<br />' });
var format_Mesures_protection_19 = new ol.format.GeoJSON();
var features_Mesures_protection_19 = format_Mesures_protection_19.readFeatures(json_Mesures_protection_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesures_protection_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_19.addFeatures(features_Mesures_protection_19);
var lyr_Mesures_protection_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_19, 
                style: style_Mesures_protection_19,
                popuplayertitle: 'Mesures_protection',
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_19.png" /> Mesures_protection'
            });
var format_Taux_1990_2000_20 = new ol.format.GeoJSON();
var features_Taux_1990_2000_20 = format_Taux_1990_2000_20.readFeatures(json_Taux_1990_2000_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taux_1990_2000_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_1990_2000_20.addFeatures(features_Taux_1990_2000_20);
var lyr_Taux_1990_2000_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_1990_2000_20, 
                style: style_Taux_1990_2000_20,
                popuplayertitle: 'Taux_1990_2000',
                interactive: true,
    title: 'Taux_1990_2000<br />\
    <img src="styles/legend/Taux_1990_2000_20_0.png" /> -13.82 à -0.24 (érosion)<br />\
    <img src="styles/legend/Taux_1990_2000_20_1.png" /> -0.24 à 0.18 (stabilité)<br />\
    <img src="styles/legend/Taux_1990_2000_20_2.png" /> 0.35 à 8.91 (accretion)<br />' });
var format_Mesures_protection_21 = new ol.format.GeoJSON();
var features_Mesures_protection_21 = format_Mesures_protection_21.readFeatures(json_Mesures_protection_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesures_protection_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_21.addFeatures(features_Mesures_protection_21);
var lyr_Mesures_protection_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_21, 
                style: style_Mesures_protection_21,
                popuplayertitle: 'Mesures_protection',
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_21.png" /> Mesures_protection'
            });
var format_Hotspots_22 = new ol.format.GeoJSON();
var features_Hotspots_22 = format_Hotspots_22.readFeatures(json_Hotspots_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotspots_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotspots_22.addFeatures(features_Hotspots_22);
var lyr_Hotspots_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotspots_22, 
                style: style_Hotspots_22,
                popuplayertitle: 'Hotspots',
                interactive: true,
    title: 'Hotspots<br />\
    <img src="styles/legend/Hotspots_22_0.png" /> Faible<br />\
    <img src="styles/legend/Hotspots_22_1.png" /> Modéré<br />\
    <img src="styles/legend/Hotspots_22_2.png" /> Elevé<br />' });
var format_Taux_19841990_23 = new ol.format.GeoJSON();
var features_Taux_19841990_23 = format_Taux_19841990_23.readFeatures(json_Taux_19841990_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taux_19841990_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_19841990_23.addFeatures(features_Taux_19841990_23);
var lyr_Taux_19841990_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_19841990_23, 
                style: style_Taux_19841990_23,
                popuplayertitle: 'Taux_1984-1990',
                interactive: true,
    title: 'Taux_1984-1990<br />\
    <img src="styles/legend/Taux_19841990_23_0.png" /> -22.43 à -0.23 (érosion)<br />\
    <img src="styles/legend/Taux_19841990_23_1.png" /> -0.24 à 0.24 ( stabilité)<br />\
    <img src="styles/legend/Taux_19841990_23_2.png" /> 0.3 à  16.01 (accretion)<br />' });
var format_Mesures_protection_24 = new ol.format.GeoJSON();
var features_Mesures_protection_24 = format_Mesures_protection_24.readFeatures(json_Mesures_protection_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesures_protection_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_24.addFeatures(features_Mesures_protection_24);
var lyr_Mesures_protection_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_24, 
                style: style_Mesures_protection_24,
                popuplayertitle: 'Mesures_protection',
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_24.png" /> Mesures_protection'
            });
var format_Hotspots_25 = new ol.format.GeoJSON();
var features_Hotspots_25 = format_Hotspots_25.readFeatures(json_Hotspots_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotspots_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotspots_25.addFeatures(features_Hotspots_25);
var lyr_Hotspots_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotspots_25, 
                style: style_Hotspots_25,
                popuplayertitle: 'Hotspots',
                interactive: true,
    title: 'Hotspots<br />\
    <img src="styles/legend/Hotspots_25_0.png" /> Faible<br />\
    <img src="styles/legend/Hotspots_25_1.png" /> Modéré<br />\
    <img src="styles/legend/Hotspots_25_2.png" /> Elevé<br />' });
var format_Taux_19842025_Coastsat_26 = new ol.format.GeoJSON();
var features_Taux_19842025_Coastsat_26 = format_Taux_19842025_Coastsat_26.readFeatures(json_Taux_19842025_Coastsat_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taux_19842025_Coastsat_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_19842025_Coastsat_26.addFeatures(features_Taux_19842025_Coastsat_26);
var lyr_Taux_19842025_Coastsat_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_19842025_Coastsat_26, 
                style: style_Taux_19842025_Coastsat_26,
                popuplayertitle: 'Taux_1984-2025_Coastsat',
                interactive: true,
    title: 'Taux_1984-2025_Coastsat<br />\
    <img src="styles/legend/Taux_19842025_Coastsat_26_0.png" /> -8.84 à -0.25 (érosion)<br />\
    <img src="styles/legend/Taux_19842025_Coastsat_26_1.png" /> -0.26 à 0.23 (stabilité)<br />\
    <img src="styles/legend/Taux_19842025_Coastsat_26_2.png" /> 0.23 à 34.74 (accretion)<br />' });
var format_Mesures_protection_27 = new ol.format.GeoJSON();
var features_Mesures_protection_27 = format_Mesures_protection_27.readFeatures(json_Mesures_protection_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesures_protection_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_27.addFeatures(features_Mesures_protection_27);
var lyr_Mesures_protection_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_27, 
                style: style_Mesures_protection_27,
                popuplayertitle: 'Mesures_protection',
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_27.png" /> Mesures_protection'
            });
var format_Hotspots_28 = new ol.format.GeoJSON();
var features_Hotspots_28 = format_Hotspots_28.readFeatures(json_Hotspots_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotspots_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotspots_28.addFeatures(features_Hotspots_28);
var lyr_Hotspots_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotspots_28, 
                style: style_Hotspots_28,
                popuplayertitle: 'Hotspots',
                interactive: true,
    title: 'Hotspots<br />\
    <img src="styles/legend/Hotspots_28_0.png" /> Faible<br />\
    <img src="styles/legend/Hotspots_28_1.png" /> Modéré<br />\
    <img src="styles/legend/Hotspots_28_2.png" /> Elevé<br />' });
var format_Mesures_protection_29 = new ol.format.GeoJSON();
var features_Mesures_protection_29 = format_Mesures_protection_29.readFeatures(json_Mesures_protection_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesures_protection_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_29.addFeatures(features_Mesures_protection_29);
var lyr_Mesures_protection_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_29, 
                style: style_Mesures_protection_29,
                popuplayertitle: 'Mesures_protection',
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_29.png" /> Mesures_protection'
            });
var format_AWEI_30 = new ol.format.GeoJSON();
var features_AWEI_30 = format_AWEI_30.readFeatures(json_AWEI_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AWEI_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AWEI_30.addFeatures(features_AWEI_30);
var lyr_AWEI_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AWEI_30, 
                style: style_AWEI_30,
                popuplayertitle: 'AWEI',
                interactive: true,
    title: 'AWEI<br />\
    <img src="styles/legend/AWEI_30_0.png" /> -8,43 à -0,25 (érosion)<br />\
    <img src="styles/legend/AWEI_30_1.png" /> -0,26 à 0,24 (stabilité)<br />\
    <img src="styles/legend/AWEI_30_2.png" /> 0,26 à 28, 03 (accrétion)<br />' });
var format_Traitdecte2025_31 = new ol.format.GeoJSON();
var features_Traitdecte2025_31 = format_Traitdecte2025_31.readFeatures(json_Traitdecte2025_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Traitdecte2025_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traitdecte2025_31.addFeatures(features_Traitdecte2025_31);
var lyr_Traitdecte2025_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Traitdecte2025_31, 
                style: style_Traitdecte2025_31,
                popuplayertitle: 'Trait de côte 2025',
                interactive: true,
                title: '<img src="styles/legend/Traitdecte2025_31.png" /> Trait de côte 2025'
            });
var format_Traitdecte1984_32 = new ol.format.GeoJSON();
var features_Traitdecte1984_32 = format_Traitdecte1984_32.readFeatures(json_Traitdecte1984_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Traitdecte1984_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traitdecte1984_32.addFeatures(features_Traitdecte1984_32);
var lyr_Traitdecte1984_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Traitdecte1984_32, 
                style: style_Traitdecte1984_32,
                popuplayertitle: 'Trait de côte 1984',
                interactive: true,
                title: '<img src="styles/legend/Traitdecte1984_32.png" /> Trait de côte 1984'
            });
var group_Traitsdecte = new ol.layer.Group({
                                layers: [lyr_Traitdecte2025_31,lyr_Traitdecte1984_32,],
                                fold: 'close',
                                title: 'Traits de côte'});
var group_AWEI = new ol.layer.Group({
                                layers: [lyr_Hotspots_28,lyr_Mesures_protection_29,lyr_AWEI_30,],
                                fold: 'close',
                                title: 'AWEI'});
var group_COASTSAT = new ol.layer.Group({
                                layers: [lyr_Hotspots_25,lyr_Taux_19842025_Coastsat_26,lyr_Mesures_protection_27,],
                                fold: 'close',
                                title: 'COASTSAT'});
var group_19841990 = new ol.layer.Group({
                                layers: [lyr_Hotspots_22,lyr_Taux_19841990_23,lyr_Mesures_protection_24,],
                                fold: 'close',
                                title: '1984 à 1990'});
var group_19902000 = new ol.layer.Group({
                                layers: [lyr_Taux_1990_2000_20,lyr_Mesures_protection_21,],
                                fold: 'close',
                                title: '1990 à 2000'});
var group_20002005 = new ol.layer.Group({
                                layers: [lyr_Hotspot_17,lyr_Taux_20002005_18,lyr_Mesures_protection_19,],
                                fold: 'close',
                                title: '2000 à 2005'});
var group_20052010 = new ol.layer.Group({
                                layers: [lyr_Hotspot_14,lyr_Taux_20052010_15,lyr_Mesure_protection_16,],
                                fold: 'close',
                                title: '2005 à 2010'});
var group_20102015 = new ol.layer.Group({
                                layers: [lyr_Hotspot_11,lyr_Taux_20102015_12,lyr_Mesures_protection_13,],
                                fold: 'close',
                                title: '2010 à 2015'});
var group_20152020 = new ol.layer.Group({
                                layers: [lyr_Hot_spot_8,lyr_Taux_20202025_9,lyr_Mesures_protection_10,],
                                fold: 'close',
                                title: '2015 à 2020'});
var group_20202025 = new ol.layer.Group({
                                layers: [lyr_Hotspots_5,lyr_Taux_20202025_6,lyr_Mesures_protection_7,],
                                fold: 'open',
                                title: '2020 à 2025'});
var group_Superficieperdues = new ol.layer.Group({
                                layers: [lyr_Superficie_perduegagne_4,],
                                fold: 'close',
                                title: 'Superficie perdues'});
var group_Rfrences = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_TOGO_1,lyr_Cantonsdulittoral_2,lyr_Etat_cteTOGOJuillet2025_3,],
                                fold: 'close',
                                title: 'Références'});

lyr_OSMStandard_0.setVisible(true);lyr_TOGO_1.setVisible(true);lyr_Cantonsdulittoral_2.setVisible(true);lyr_Etat_cteTOGOJuillet2025_3.setVisible(true);lyr_Superficie_perduegagne_4.setVisible(true);lyr_Hotspots_5.setVisible(false);lyr_Taux_20202025_6.setVisible(false);lyr_Mesures_protection_7.setVisible(false);lyr_Hot_spot_8.setVisible(false);lyr_Taux_20202025_9.setVisible(false);lyr_Mesures_protection_10.setVisible(false);lyr_Hotspot_11.setVisible(false);lyr_Taux_20102015_12.setVisible(false);lyr_Mesures_protection_13.setVisible(false);lyr_Hotspot_14.setVisible(false);lyr_Taux_20052010_15.setVisible(false);lyr_Mesure_protection_16.setVisible(true);lyr_Hotspot_17.setVisible(true);lyr_Taux_20002005_18.setVisible(true);lyr_Mesures_protection_19.setVisible(true);lyr_Taux_1990_2000_20.setVisible(true);lyr_Mesures_protection_21.setVisible(true);lyr_Hotspots_22.setVisible(true);lyr_Taux_19841990_23.setVisible(true);lyr_Mesures_protection_24.setVisible(false);lyr_Hotspots_25.setVisible(true);lyr_Taux_19842025_Coastsat_26.setVisible(true);lyr_Mesures_protection_27.setVisible(true);lyr_Hotspots_28.setVisible(true);lyr_Mesures_protection_29.setVisible(true);lyr_AWEI_30.setVisible(true);lyr_Traitdecte2025_31.setVisible(true);lyr_Traitdecte1984_32.setVisible(true);
var layersList = [group_Rfrences,group_Superficieperdues,group_20202025,group_20152020,group_20102015,group_20052010,group_20002005,group_19902000,group_19841990,group_COASTSAT,group_AWEI,group_Traitsdecte];
lyr_TOGO_1.set('fieldAliases', {'FID_TOGO_D': 'FID_TOGO_D', 'Id': 'Id', 'AREA': 'AREA', 'AREA_1': 'AREA_1', 'FID_2025': 'FID_2025', 'Id_1': 'Id_1', 'TYPE': 'TYPE', });
lyr_Cantonsdulittoral_2.set('fieldAliases', {'FID_ZE': 'FID_ZE', 'FID_Zone_d': 'FID_Zone_d', 'fid_': 'fid_', 'region_id': 'region_id', 'region_nom': 'region_nom', 'prefecture': 'prefecture', 'prefectu_1': 'prefectu_1', 'commune_id': 'commune_id', 'commune_no': 'commune_no', 'canton_id': 'canton_id', 'canton_nom': 'canton_nom', 'canton_n_1': 'canton_n_1', 'grand_lome': 'grand_lome', 'Duplicata': 'Duplicata', 'FID_zone_e': 'FID_zone_e', 'Id': 'Id', 'FID_Zone_1': 'FID_Zone_1', 'fid1': 'fid1', 'region_i_1': 'region_i_1', 'region_n_1': 'region_n_1', 'prefectu_2': 'prefectu_2', 'prefectu_3': 'prefectu_3', 'commune__1': 'commune__1', 'commune__2': 'commune__2', 'canton_i_1': 'canton_i_1', 'canton_n_2': 'canton_n_2', 'canton_n_3': 'canton_n_3', 'grand_lo_1': 'grand_lo_1', 'Duplicat_1': 'Duplicat_1', });
lyr_Etat_cteTOGOJuillet2025_3.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'photo': 'photo', 'photo_eros': 'photo_eros', });
lyr_Superficie_perduegagne_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_TGGGG_': 'FID_TGGGG_', 'SUP': 'SUP', 'FID_TOGO_1': 'FID_TOGO_1', 'Id': 'Id', 'SUP_1': 'SUP_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SU': 'SU', 'SUPERT': 'SUPERT', 'Shape_Le_1': 'Shape_Le_1', 'Etat': 'Etat', });
lyr_Hotspots_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_otspo': 'FID_otspo', 'SOURCE_ID': 'SOURCE_ID', 'PO': 'PO', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Taux_20202025_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', 'FID_tau': 'FID_tau', 'ObjectID_3': 'ObjectID_3', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'EPR1': 'EPR1', });
lyr_Mesures_protection_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'ORIG_FID': 'ORIG_FID', });
lyr_Hot_spot_8.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_hoho': 'FID_hoho', 'SOURCE_ID': 'SOURCE_ID', 'PO': 'PO', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Taux_20202025_9.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', 'FID_taux': 'FID_taux', 'ObjectID_3': 'ObjectID_3', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'EPR1': 'EPR1', });
lyr_Mesures_protection_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'ORIG_FID': 'ORIG_FID', });
lyr_Hotspot_11.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Trai_c': 'FID_Trai_c', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', 'FID_Hotspo': 'FID_Hotspo', 'SOURCE_ID': 'SOURCE_ID', 'PO': 'PO', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', });
lyr_Taux_20102015_12.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Trai_c': 'FID_Trai_c', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', 'FID_TAU': 'FID_TAU', 'ObjectID_3': 'ObjectID_3', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'EPR1': 'EPR1', });
lyr_Mesures_protection_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'ORIG_FID': 'ORIG_FID', });
lyr_Hotspot_14.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_HOT': 'FID_HOT', 'SOURCE_ID': 'SOURCE_ID', 'PO': 'PO', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Taux_20052010_15.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_TAU': 'FID_TAU', 'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'EPR1': 'EPR1', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Mesure_protection_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'ORIG_FID': 'ORIG_FID', });
lyr_Hotspot_17.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', 'FID_HOT': 'FID_HOT', 'SOURCE_ID': 'SOURCE_ID', 'PO': 'PO', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', });
lyr_Taux_20002005_18.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_TAUX': 'FID_TAUX', 'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'EPR1': 'EPR1', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Mesures_protection_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ORIG_FID': 'ORIG_FID', });
lyr_Taux_1990_2000_20.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Taux_1': 'FID_Taux_1', 'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'EPR1': 'EPR1', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Mesures_protection_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ORIG_FID': 'ORIG_FID', });
lyr_Hotspots_22.set('fieldAliases', {'FID_Trait': 'FID_Trait', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', 'FID_Hot_sp': 'FID_Hot_sp', 'SOURCE_ID': 'SOURCE_ID', 'PO': 'PO', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', });
lyr_Taux_19841990_23.set('fieldAliases', {'FID_Trait': 'FID_Trait', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', 'FID_TAUX_1': 'FID_TAUX_1', 'ObjectID_2': 'ObjectID_2', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'EPR1': 'EPR1', });
lyr_Mesures_protection_24.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ORIG_FID': 'ORIG_FID', });
lyr_Hotspots_25.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_HOT': 'FID_HOT', 'SOURCE_ID': 'SOURCE_ID', 'LRR': 'LRR', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Taux_19842025_Coastsat_26.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_TAUX': 'FID_TAUX', 'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Mesures_protection_27.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ORIG_FID': 'ORIG_FID', });
lyr_Hotspots_28.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', 'FID_HOT': 'FID_HOT', 'SOURCE_ID': 'SOURCE_ID', 'PO': 'PO', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', });
lyr_Mesures_protection_29.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ORIG_FID': 'ORIG_FID', });
lyr_AWEI_30.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_TAUX': 'FID_TAUX', 'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'EPR1': 'EPR1', 'FID_Trait_': 'FID_Trait_', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Traitdecte2025_31.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Traitdecte1984_32.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'year': 'year', 'Shape_Leng': 'Shape_Leng', 'id': 'id', 'Date_': 'Date_', 'Uncy': 'Uncy', 'Shape_Le_1': 'Shape_Le_1', });
lyr_TOGO_1.set('fieldImages', {'FID_TOGO_D': 'TextEdit', 'Id': 'Range', 'AREA': 'TextEdit', 'AREA_1': 'TextEdit', 'FID_2025': 'TextEdit', 'Id_1': 'Range', 'TYPE': 'TextEdit', });
lyr_Cantonsdulittoral_2.set('fieldImages', {'FID_ZE': 'TextEdit', 'FID_Zone_d': 'TextEdit', 'fid_': 'TextEdit', 'region_id': 'TextEdit', 'region_nom': 'TextEdit', 'prefecture': 'TextEdit', 'prefectu_1': 'TextEdit', 'commune_id': 'TextEdit', 'commune_no': 'TextEdit', 'canton_id': 'TextEdit', 'canton_nom': 'TextEdit', 'canton_n_1': 'TextEdit', 'grand_lome': 'TextEdit', 'Duplicata': 'TextEdit', 'FID_zone_e': 'TextEdit', 'Id': 'Range', 'FID_Zone_1': 'TextEdit', 'fid1': 'TextEdit', 'region_i_1': 'TextEdit', 'region_n_1': 'TextEdit', 'prefectu_2': 'TextEdit', 'prefectu_3': 'TextEdit', 'commune__1': 'TextEdit', 'commune__2': 'TextEdit', 'canton_i_1': 'TextEdit', 'canton_n_2': 'TextEdit', 'canton_n_3': 'TextEdit', 'grand_lo_1': 'TextEdit', 'Duplicat_1': 'TextEdit', });
lyr_Etat_cteTOGOJuillet2025_3.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'photo': 'TextEdit', 'photo_eros': 'ExternalResource', });
lyr_Superficie_perduegagne_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_TGGGG_': 'TextEdit', 'SUP': 'TextEdit', 'FID_TOGO_1': 'TextEdit', 'Id': 'TextEdit', 'SUP_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SU': 'TextEdit', 'SUPERT': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Etat': 'TextEdit', });
lyr_Hotspots_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_otspo': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'PO': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Taux_20202025_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_tau': 'TextEdit', 'ObjectID_3': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'EPR1': 'TextEdit', });
lyr_Mesures_protection_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'OBJECTID': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Hot_spot_8.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_hoho': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'PO': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Taux_20202025_9.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_taux': 'TextEdit', 'ObjectID_3': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'EPR1': 'TextEdit', });
lyr_Mesures_protection_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'OBJECTID': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Hotspot_11.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Trai_c': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_Hotspo': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'PO': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', });
lyr_Taux_20102015_12.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Trai_c': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_TAU': 'TextEdit', 'ObjectID_3': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'EPR1': 'TextEdit', });
lyr_Mesures_protection_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'OBJECTID': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Hotspot_14.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_HOT': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'PO': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Taux_20052010_15.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_TAU': 'TextEdit', 'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'EPR1': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Mesure_protection_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'OBJECTID': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Hotspot_17.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_HOT': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'PO': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', });
lyr_Taux_20002005_18.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_TAUX': 'TextEdit', 'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'EPR1': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Mesures_protection_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Taux_1990_2000_20.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Taux_1': 'TextEdit', 'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'EPR1': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Mesures_protection_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Hotspots_22.set('fieldImages', {'FID_Trait': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_Hot_sp': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'PO': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', });
lyr_Taux_19841990_23.set('fieldImages', {'FID_Trait': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_TAUX_1': 'TextEdit', 'ObjectID_2': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'EPR1': 'TextEdit', });
lyr_Mesures_protection_24.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Hotspots_25.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_HOT': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'LRR': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Taux_19842025_Coastsat_26.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_TAUX': 'TextEdit', 'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Mesures_protection_27.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Hotspots_28.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_HOT': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'PO': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', });
lyr_Mesures_protection_29.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_AWEI_30.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_TAUX': 'TextEdit', 'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'EPR1': 'TextEdit', 'FID_Trait_': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Traitdecte2025_31.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Traitdecte1984_32.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'year': 'TextEdit', 'Shape_Leng': 'TextEdit', 'id': 'TextEdit', 'Date_': 'DateTime', 'Uncy': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_TOGO_1.set('fieldLabels', {'FID_TOGO_D': 'no label', 'Id': 'no label', 'AREA': 'no label', 'AREA_1': 'no label', 'FID_2025': 'no label', 'Id_1': 'no label', 'TYPE': 'no label', });
lyr_Cantonsdulittoral_2.set('fieldLabels', {'FID_ZE': 'no label', 'FID_Zone_d': 'no label', 'fid_': 'no label', 'region_id': 'no label', 'region_nom': 'no label', 'prefecture': 'no label', 'prefectu_1': 'no label', 'commune_id': 'no label', 'commune_no': 'no label', 'canton_id': 'no label', 'canton_nom': 'no label', 'canton_n_1': 'no label', 'grand_lome': 'no label', 'Duplicata': 'no label', 'FID_zone_e': 'no label', 'Id': 'no label', 'FID_Zone_1': 'no label', 'fid1': 'no label', 'region_i_1': 'no label', 'region_n_1': 'no label', 'prefectu_2': 'no label', 'prefectu_3': 'no label', 'commune__1': 'no label', 'commune__2': 'no label', 'canton_i_1': 'no label', 'canton_n_2': 'no label', 'canton_n_3': 'header label - always visible', 'grand_lo_1': 'no label', 'Duplicat_1': 'no label', });
lyr_Etat_cteTOGOJuillet2025_3.set('fieldLabels', {'id': 'no label', 'nom': 'no label', 'photo': 'no label', 'photo_eros': 'header label - visible with data', });
lyr_Superficie_perduegagne_4.set('fieldLabels', {'OBJECTID': 'no label', 'FID_TGGGG_': 'no label', 'SUP': 'no label', 'FID_TOGO_1': 'no label', 'Id': 'no label', 'SUP_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SU': 'header label - visible with data', 'SUPERT': 'no label', 'Shape_Le_1': 'no label', 'Etat': 'header label - always visible', });
lyr_Hotspots_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_otspo': 'no label', 'SOURCE_ID': 'no label', 'PO': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'header label - always visible', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Taux_20202025_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', 'FID_tau': 'no label', 'ObjectID_3': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'EPR1': 'header label - visible with data', });
lyr_Mesures_protection_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'OBJECTID': 'no label', 'ORIG_FID': 'no label', });
lyr_Hot_spot_8.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_hoho': 'no label', 'SOURCE_ID': 'no label', 'PO': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'header label - always visible', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Taux_20202025_9.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', 'FID_taux': 'no label', 'ObjectID_3': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'EPR1': 'header label - visible with data', });
lyr_Mesures_protection_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'OBJECTID': 'no label', 'ORIG_FID': 'no label', });
lyr_Hotspot_11.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_Trai_c': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', 'FID_Hotspo': 'no label', 'SOURCE_ID': 'no label', 'PO': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'header label - always visible', });
lyr_Taux_20102015_12.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_Trai_c': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', 'FID_TAU': 'no label', 'ObjectID_3': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'EPR1': 'header label - visible with data', });
lyr_Mesures_protection_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'OBJECTID': 'no label', 'ORIG_FID': 'no label', });
lyr_Hotspot_14.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_HOT': 'no label', 'SOURCE_ID': 'no label', 'PO': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'header label - always visible', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Taux_20052010_15.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_TAU': 'no label', 'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'EPR1': 'header label - visible with data', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Mesure_protection_16.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'OBJECTID': 'no label', 'ORIG_FID': 'no label', });
lyr_Hotspot_17.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', 'FID_HOT': 'no label', 'SOURCE_ID': 'no label', 'PO': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'header label - always visible', });
lyr_Taux_20002005_18.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_TAUX': 'no label', 'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'EPR1': 'header label - visible with data', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Mesures_protection_19.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ORIG_FID': 'no label', });
lyr_Taux_1990_2000_20.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_Taux_1': 'no label', 'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'EPR1': 'inline label - visible with data', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Mesures_protection_21.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ORIG_FID': 'no label', });
lyr_Hotspots_22.set('fieldLabels', {'FID_Trait': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', 'FID_Hot_sp': 'no label', 'SOURCE_ID': 'no label', 'PO': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'header label - visible with data', });
lyr_Taux_19841990_23.set('fieldLabels', {'FID_Trait': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', 'FID_TAUX_1': 'no label', 'ObjectID_2': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'EPR1': 'header label - visible with data', });
lyr_Mesures_protection_24.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ORIG_FID': 'no label', });
lyr_Hotspots_25.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_HOT': 'no label', 'SOURCE_ID': 'no label', 'LRR': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'inline label - always visible', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Taux_19842025_Coastsat_26.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_TAUX': 'no label', 'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'inline label - always visible', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'inline label - always visible', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Mesures_protection_27.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ORIG_FID': 'no label', });
lyr_Hotspots_28.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', 'FID_HOT': 'no label', 'SOURCE_ID': 'no label', 'PO': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'header label - always visible', });
lyr_Mesures_protection_29.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ORIG_FID': 'no label', });
lyr_AWEI_30.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_TAUX': 'no label', 'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'EPR1': 'no label', 'FID_Trait_': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'no label', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Traitdecte2025_31.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'header label - always visible', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Traitdecte1984_32.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'year': 'no label', 'Shape_Leng': 'no label', 'id': 'no label', 'Date_': 'header label - always visible', 'Uncy': 'no label', 'Shape_Le_1': 'no label', });
lyr_Traitdecte1984_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});