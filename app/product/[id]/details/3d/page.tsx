import Threedee from './Threedee';
import Navbar from '@/app/ui/navbar';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import { TbAugmentedReality } from "react-icons/tb";
import QRCode from 'qrcode';

export default async function Canvas3D({ params }: { params: { id: string } }) {
  const objectID = params.id;

  // With async/await
  const generateQR = async (text) => {
    try {
      return await QRCode.toDataURL(text)
    } catch (err) {
      console.error(err)
    }
  }
  const qrcode = await generateQR("https://www.youtube.com")

  let isToggled = false;

  const toggleQRCode = () => {
    isToggled = !isToggled;
  }
  return (
    <div>
      <div className='flex justify-between'>
        <Link href={`/product/${objectID}/details`}>
            <IoMdArrowBack className="text-2xl sm:text-3xl mt-5" />
        </Link>
            <button onClick={toggleQRCode} >
              <TbAugmentedReality className="text-3xl sm:text-3xl mt-5"/>
            </button>
      </div>
      <div className="h-dvh w-full sm:w-dvw">
        <Threedee id={objectID} />
      </div>
      <Navbar />
    </div>
  );
}
