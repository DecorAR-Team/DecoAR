import Qrcode from '@/app/ui/qrpage/qrcode';
import Threedee from './Threedee';
import Navbar from '@/app/ui/navbar';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import { TbAugmentedReality } from "react-icons/tb";


export default async function Canvas3D({ params }: { params: { id: string } }) {
  const objectID = params.id;

  return (
    <div>
      <div className='flex justify-between'>
        <Link href={`/product/${objectID}/details`}>
            <IoMdArrowBack className="text-2xl sm:text-3xl mt-5" />
        </Link>
            <button >
              <TbAugmentedReality className="text-3xl sm:text-3xl mt-5"/>
            </button>
      </div>
      <div>
        <Qrcode image={`https://www.youtube.com`} />
      </div>
      <div className="h-dvh w-full sm:w-dvw">
        <Threedee id={objectID} />
      </div>
      <Navbar />
    </div>
  );
}
