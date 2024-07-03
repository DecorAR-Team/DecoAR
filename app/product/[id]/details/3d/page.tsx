import Threedee from './Threedee';
import Navbar from '@/components/ui/navbar';
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
import ArrowBack from '@/components/ui/arrow-back';

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
      <div className="flex flex-row md:max-w-xl md:mx-auto justify-between items-center">
        <div className="mt-5">
          <ArrowBack />
        </div>
        <Drawer>
          <DrawerTrigger>
            <TbAugmentedReality className="text-3xl sm:text-3xl mt-2" />
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
      {/* <Navbar /> */}
    </div>
  );
}
