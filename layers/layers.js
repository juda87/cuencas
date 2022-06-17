var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Cuencas_Orden_3_2 = new ol.format.GeoJSON();
var features_Cuencas_Orden_3_2 = format_Cuencas_Orden_3_2.readFeatures(json_Cuencas_Orden_3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuencas_Orden_3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas_Orden_3_2.addFeatures(features_Cuencas_Orden_3_2);
var lyr_Cuencas_Orden_3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuencas_Orden_3_2, 
                style: style_Cuencas_Orden_3_2,
                interactive: true,
                title: '<img src="styles/legend/Cuencas_Orden_3_2.png" /> Cuencas_Orden_3'
            });
var format_RIO_DOBLE_5101_3 = new ol.format.GeoJSON();
var features_RIO_DOBLE_5101_3 = format_RIO_DOBLE_5101_3.readFeatures(json_RIO_DOBLE_5101_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIO_DOBLE_5101_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIO_DOBLE_5101_3.addFeatures(features_RIO_DOBLE_5101_3);
var lyr_RIO_DOBLE_5101_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIO_DOBLE_5101_3, 
                style: style_RIO_DOBLE_5101_3,
                interactive: true,
                title: '<img src="styles/legend/RIO_DOBLE_5101_3.png" /> RIO_DOBLE_5101'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Cuencas_Orden_3_2.setVisible(true);lyr_RIO_DOBLE_5101_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_OSMStandard_1,lyr_Cuencas_Orden_3_2,lyr_RIO_DOBLE_5101_3];
lyr_Cuencas_Orden_3_2.set('fieldAliases', {'COD_CUENC': 'COD_CUENC', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', 'NOMBRE': 'NOMBRE', 'Hectareas': 'Hectareas', 'Hect_MAO': 'Hect_MAO', });
lyr_RIO_DOBLE_5101_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NMG': 'NMG', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Cuencas_Orden_3_2.set('fieldImages', {'COD_CUENC': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', 'NOMBRE': 'TextEdit', 'Hectareas': 'TextEdit', 'Hect_MAO': 'TextEdit', });
lyr_RIO_DOBLE_5101_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NMG': 'TextEdit', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_Cuencas_Orden_3_2.set('fieldLabels', {'COD_CUENC': 'no label', 'AREA': 'no label', 'PERIMETRO': 'no label', 'NOMBRE': 'no label', 'Hectareas': 'no label', 'Hect_MAO': 'no label', });
lyr_RIO_DOBLE_5101_3.set('fieldLabels', {'OBJECTID': 'no label', 'NMG': 'no label', 'SHAPE_STAr': 'no label', 'SHAPE_STLe': 'no label', });
lyr_RIO_DOBLE_5101_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});