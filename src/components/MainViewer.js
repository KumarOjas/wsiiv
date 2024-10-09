import React, { useEffect } from 'react';
import OpenSeadragon from 'openseadragon';

const MainViewer = () => {
  useEffect(() => {
    const viewer = OpenSeadragon({
      id: 'openseadragon-viewer',
      prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
      tileSources: {
        type: 'image',
        url: 'https://via.placeholder.com/1000', // Replace with actual slide image URL
      },
      showNavigator: true,
      defaultZoomLevel: 1,
      minZoomLevel: 0.5,
      maxZoomLevel: 10,
    });
  }, []);

  return (
    <div className="main-viewer">
      {/* This is where the OpenSeadragon viewer will be placed */}
      
      
      
      <div id="openseadragon-viewer"></div>
    </div>
  );
};

export default MainViewer;
