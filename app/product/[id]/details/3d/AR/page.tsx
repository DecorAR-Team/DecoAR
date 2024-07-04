import ArrowBack from "@/components/ui/arrow-back";
import ARModel from "./ARModel";

export default function CanvasAR({ params }: { params: { id: string } }) {
  const objectID = params.id;
  return (
    <div className="h-dvh w-full sm:w-dvw">
        <ARModel objectID={objectID}/>
    </div>
  )
}
