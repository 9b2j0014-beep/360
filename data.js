var APP_DATA = {
  "scenes": [
    {
      "id": "0-shot1",
      "name": "shot1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.3169001292494329,
          "pitch": -0.4704323717438541,
          "rotation": 0,
          "target": "1-shot2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-shot2",
      "name": "shot2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9941690783017876,
          "pitch": 0.2046223225891417,
          "rotation": 0,
          "target": "2-shot3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-shot3",
      "name": "shot3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24584945843759343,
          "pitch": -0.10514730738280242,
          "rotation": 0,
          "target": "0-shot1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
