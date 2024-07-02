import Threedee from './Threedee';
import Navbar from '@/app/ui/navbar';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import { TbAugmentedReality } from 'react-icons/tb';
import Image from 'next/image';
import QRCode from 'qrcode';

export default async function Canvas3D({ params }: { params: { id: string } }) {
  const objectID = params.id;

  const generateQR = async (text: string) => {
    try {
      return await QRCode.toDataURL(text);
    } catch (err) {
      console.error(err);
    }
  };
  const qrImage = await generateQR(`https://www.youtube.com`);

  return (
    <div>
      <div className="flex justify-between">
        <Link href={`/product/${objectID}/details`}>
          <IoMdArrowBack className="text-2xl sm:text-3xl mt-5" />
        </Link>
        <button>
          <TbAugmentedReality className="text-3xl sm:text-3xl mt-5" />
        </button>
      </div>
      <div className="h-dvh w-full sm:w-dvw">
        <div>
          <Image
            src={qrImage || ''}
            alt="qrcode-for-3d-model"
            height={300}
            width={300}
          />
        </div>
        <Threedee id={objectID} />
      </div>
      <Navbar />
    </div>
  );
}
