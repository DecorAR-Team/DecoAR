import Threedee from './Threedee';
import Navbar from '@/app/ui/navbar';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import { TbAugmentedReality } from 'react-icons/tb';
import Image from 'next/image';
import QRCode from 'qrcode';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from 'antd';

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
      <div className="flex justify-around">
        <Link href={`/product/${objectID}/details`}>
          <IoMdArrowBack className="text-2xl sm:text-3xl mt-5" />
        </Link>
        <Drawer>
          <DrawerTrigger>
            <TbAugmentedReality className="text-3xl sm:text-3xl mt-5" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerFooter>
              <Image
                src={qrImage || ''}
                alt="QRCode-for-3d-model"
                height={250}
                width={250}
                className="flex mx-auto"
              />
              <DrawerClose>
                <Button className="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="h-dvh w-full sm:w-dvw">
        <Threedee id={objectID} />
      </div>
      <Navbar />
    </div>
  );
}
