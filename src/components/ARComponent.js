import React, { useRef } from 'react';
import { ZapparCamera,  ZapparCanvas, Loader } from "@zappar/zappar-react-three-fiber";

const ARComponent = () => {
  const camera = useRef();
  const targetFile = require("file-loader!./target.zpt").default;

  return (
    <ZapparCanvas>
      <ZapparCamera userFacing />
      <ImageTracker onVisible={(anchor) => console.log(`Visible ${anchor.id}`)}
        onNotVisible={(anchor) => console.log(`Not visible ${anchor.id}`)}
        onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
        targetImage={targetFile}>
        <div style="width: 300px; height: 300px; background-color: #336699">&nbsp;</div> 
      </ImageTracker>
      <Loader />
    </ZapparCanvas>
  )
};

export default ARComponent;