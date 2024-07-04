import Threedee from './Threedee';
import Link from 'next/link';
import { TbAugmentedReality } from 'react-icons/tb';
import Image from 'next/image';
import QRCode from 'qrcode';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from 'antd';
import ArrowBack from '@/components/ui/arrow-back';
import { isMobile } from 'react-device-detect'

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

  console.log(isMobile)

  return (
    <>
      <div>
        <div className="flex flex-row md:max-w-xl md:mx-auto justify-between items-center">
          <div className="mt-5">
            <ArrowBack />
          </div>
          { !isMobile ? 
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
          : 
            <Link href={`/product/${objectID}/details/3d/AR`}>
              <TbAugmentedReality className="text-3xl sm:text-3xl mt-5" />
            </Link>
          }
        </div>
        <div className="h-dvh w-full sm:w-dvw">
          <Threedee id={objectID} />
        </div>
      </div>
    </>
  );
}
