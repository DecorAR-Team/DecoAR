import Threedee from "./Threedee";

export default function Canvas3D({params}: {params: {id: string}}) { //pass params as a prop to child component / fetch URL from server before passing
  const objectID = params.id;
    return (
          <div className="h-dvh w-full">
              <Threedee id={objectID}/>
          </div>
    )
}