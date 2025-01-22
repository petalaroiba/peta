var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PekerjaanTrigada_1 = new ol.format.GeoJSON();
var features_PekerjaanTrigada_1 = format_PekerjaanTrigada_1.readFeatures(json_PekerjaanTrigada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PekerjaanTrigada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PekerjaanTrigada_1.addFeatures(features_PekerjaanTrigada_1);
var lyr_PekerjaanTrigada_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PekerjaanTrigada_1, 
                style: style_PekerjaanTrigada_1,
                popuplayertitle: 'Pekerjaan Trigada',
                interactive: true,
                title: '<img src="styles/legend/PekerjaanTrigada_1.png" /> Pekerjaan Trigada'
            });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: "open",
                                title: 'Basemap'});

lyr_OSMStandard_0.setVisible(true);lyr_PekerjaanTrigada_1.setVisible(true);
var layersList = [group_Basemap,lyr_PekerjaanTrigada_1];
lyr_PekerjaanTrigada_1.set('fieldAliases', {'id': 'id', 'Pekerjaan': 'Pekerjaan', 'Ruas': 'Ruas', 'Instansi': 'Instansi', 'Konsultan': 'Konsultan', 'Tahun': 'Tahun', });
lyr_PekerjaanTrigada_1.set('fieldImages', {'id': 'TextEdit', 'Pekerjaan': 'TextEdit', 'Ruas': 'TextEdit', 'Instansi': 'TextEdit', 'Konsultan': 'TextEdit', 'Tahun': 'TextEdit', });
lyr_PekerjaanTrigada_1.set('fieldLabels', {'id': 'hidden field', 'Pekerjaan': 'inline label - always visible', 'Ruas': 'inline label - always visible', 'Instansi': 'inline label - always visible', 'Konsultan': 'inline label - always visible', 'Tahun': 'inline label - always visible', });
lyr_PekerjaanTrigada_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});