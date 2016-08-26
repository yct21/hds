// Compiled by ClojureScript 1.9.89 {}
goog.provide('histology_digital_slides.core');
goog.require('cljs.core');
histology_digital_slides.core.my_map = L.map("map",{"crs": L.CRS.Simple, "minZoom": (16), "maxZoom": (20), "attributionControl": false});
histology_digital_slides.core.image_width = (8192);
histology_digital_slides.core.image_height = (8192);
histology_digital_slides.core.south_west = histology_digital_slides.core.my_map.unproject([(0),histology_digital_slides.core.image_height],histology_digital_slides.core.my_map.getMaxZoom());
histology_digital_slides.core.north_east = histology_digital_slides.core.my_map.unproject([histology_digital_slides.core.image_width,(0)],histology_digital_slides.core.my_map.getMaxZoom());
histology_digital_slides.core.bounds = (new L.LatLngBounds(histology_digital_slides.core.south_west,histology_digital_slides.core.north_east));
histology_digital_slides.core.my_map.setMaxBounds(histology_digital_slides.core.bounds);
histology_digital_slides.core.tile_url = "images/tiles/{z}/map_tile_{x}_{y}.jpg";
histology_digital_slides.core.tile_layer = L.tileLayer(histology_digital_slides.core.tile_url,{"errorTileUrl": "images/empty.png", "tileSize": (512), "maxZoom": (20)}).addTo(histology_digital_slides.core.my_map);
histology_digital_slides.core.my_map.setView([(4096),(4096)],(16));
histology_digital_slides.core.my_map.on("click",(function (p1__10340_SHARP_){
return L.marker(p1__10340_SHARP_.latlng).addTo(histology_digital_slides.core.my_map);
}));
/**
 * Initialize the app
 */
histology_digital_slides.core.init = (function histology_digital_slides$core$init(){
histology_digital_slides.core.my_map.fitBounds(histology_digital_slides.core.bounds);

return my_map = histology_digital_slides.core.my_map;
});

//# sourceMappingURL=core.js.map