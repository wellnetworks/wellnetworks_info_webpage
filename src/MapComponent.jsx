import React from 'react';

const MapComponent = () => {
  return (
    <>
      {/* 1. 약도 노드 */}
      <div id="daumRoughmapContainer1688691117940" className="root_daum_roughmap root_daum_roughmap_landing"></div>

      {/* 2. 설치 스크립트 */}
      <script charset="UTF-8" className="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

      {/* 3. 실행 스크립트 */}
      <script charset="UTF-8">
        {`
          new daum.roughmap.Lander({
            "timestamp": "1688691117940",
            "key": "2ffm2",
            "mapWidth": "360",
            "mapHeight": "240"
          }).render();
        `}
      </script>
    </>
  );
};

export default MapComponent;