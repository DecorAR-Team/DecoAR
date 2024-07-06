'use client'

import { isMobile } from 'react-device-detect';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
  } from '@/components/ui/drawer';
  import Image from 'next/image';
  import { TbAugmentedReality } from 'react-icons/tb';
  import Link from 'next/link';
  import { Button } from 'antd';

export default function ArButton({qrImage, objectID}: {qrImage: string | undefined, objectID: string}) {
  return (
    <>
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
    </>
  )
}