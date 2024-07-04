import Threedee from './Threedee';
import QRCode from 'qrcode';

import ArrowBack from '@/components/ui/arrow-back';
import ArButton from './ArButton';

export default async function Canvas3D({ params }: { params: { id: string } }) {
  const objectID = params.id;
  const generateQR = async (text: string) => {
    try {
      return await QRCode.toDataURL(text);
    } catch (err) {
      console.error(err);
    }
  };
  const qrImage = await generateQR(`https://decoar.vercel.app/product/${objectID}/details/3d/AR`);

  return (
    <>
      <div>
        <div className="flex flex-row md:max-w-xl md:mx-auto justify-between items-center">
          <div className="mt-5">
            <ArrowBack />
          </div>
          <ArButton qrImage={qrImage} objectID={objectID} />
        </div>
        <div className="h-dvh w-full sm:w-dvw">
          <Threedee id={objectID} />
        </div>
      </div>
    </>
  );
}
