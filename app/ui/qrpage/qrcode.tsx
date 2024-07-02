import Image from "next/image";


export default function Qrcode({image}: {image: string}) {

  return (
    <div>
      <Image src={image} alt="qrcode-for-3d-model"/>
    </div>
  )
}
