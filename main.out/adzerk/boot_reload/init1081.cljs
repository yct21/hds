(ns adzerk.boot-reload.init1081 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:54246" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})