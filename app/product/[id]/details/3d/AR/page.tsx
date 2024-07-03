/* 
    ? add component from 3D

    meil on vaja kõik propid saada ja need edasi saata 3D komponendile
    1. saame kätte kõik propsid
    2. 


*/

import ARModel from "./ARModel";


export default function CanvasAR({ params }: { params: { id: string } }) {
  const objectID = params.id;
  return (
    <div className="h-dvh w-full sm:w-dvw">
        <ARModel objectID={objectID}/>
    </div>
  )
}
