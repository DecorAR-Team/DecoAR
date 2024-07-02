import { quattrocento } from '@/app/layout';
import { fetchFavoriteProducts, prisma } from '@/app/lib/data';
import ProductList from '@/app/ui/product-list';
import { auth } from '@clerk/nextjs/server';

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
      <h2 className={`${quattrocento.className} font-bold text-xl`}>
        Your favorite items
      </h2>
      <ProductList products={favProducts} />
    </div>
  );
}
