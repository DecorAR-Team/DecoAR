import { fetchFavoriteProducts, prisma } from '@/lib/data';
import ArrowBack from '@/components/ui/arrow-back';
import ProductList from '@/components/ui/product-list';
import { auth } from '@clerk/nextjs/server';
import { Quattrocento } from 'next/font/google';

const quattrocento = Quattrocento({ weight: '700', subsets: ['latin'] });

export default async function Favorite() {
  const { userId } = auth();

  const favorites = await prisma.favorite.findMany({
    where: {
      userClerkId: userId ?? undefined,
    },
  });

  const productIds = favorites.map((favorite) => favorite.productId);

  let favProducts = [];
  for (let productId of productIds) {
    const product = await fetchFavoriteProducts(productId);
    if (product) {
      favProducts.push(product);
    }
  }

  return (
    <div>
      <ArrowBack />
      <h2 className={`${quattrocento.className} text-slate-700 text-xl`}>
        Your favorite items
      </h2>
      <ProductList products={favProducts} />
    </div>
  );
}
