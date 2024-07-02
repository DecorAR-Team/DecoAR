'use client'

import Image from "next/image";
import QRCode from 'qrcode';
import { useState } from "react";


export default function Qrcode({image}: {image: string}) {
  const [qrImage, setQrImage] = useState('' as string)

  QRCode.toDataURL(image)
  .then(url => {
    setQrImage(url)
    return(url)
  })
  .catch(err => {
    console.error(err)
  })

  console.log(qrImage)
  let canvas = document.getElementById('canvas') 

  QRCode.toCanvas(canvas, qrcode, function (error) {
    if (error) console.error(error)
    console.log('success!');
  })

  return (
    <div>
      <Image src={image} alt="qrcode-for-3d-model"/>
    </div>
  )
}
