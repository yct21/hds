(ns histology-digital-slides.core)

(def my-map
  (.map js/L "map"
        #js {:crs js/L.CRS.Simple
             :minZoom 16
             :maxZoom 20
             :attributionControl false}))

(def image-width 8192)
(def image-height 8192)
(def south-west (.unproject my-map #js [0, image-height] (.getMaxZoom my-map)))
(def north-east (.unproject my-map #js [image-width, 0] (.getMaxZoom my-map)))
(def bounds (L.LatLngBounds. south-west north-east))
(.setMaxBounds my-map bounds)

(def tile-url "images/tiles/{z}/map_tile_{x}_{y}.jpg")
(def tile-layer (-> js/L
                    (.tileLayer tile-url
                                #js {:errorTileUrl "images/empty.png"
                                     :tileSize 512
                                     :maxZoom 20})
                    (.addTo my-map)))

(.setView my-map #js [4096 4096] 16)

(.on my-map "click" #(-> js/L
                         (.marker (.-latlng %))
                         (.addTo my-map)))

(defn init
  "Initialize the app"
  []
  (.fitBounds my-map bounds)
  (set! js/my_map my-map))
