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
      <ProductList products={favProducts} isFavoriteList={true} />
    </div>
  );
}
