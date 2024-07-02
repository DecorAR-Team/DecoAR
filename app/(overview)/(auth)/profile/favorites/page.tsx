import { fetchFavoriteProducts, fetchProduct, prisma } from '@/app/lib/data';
import FavList from '@/app/ui/fav-list/fav-list';
import { auth } from '@clerk/nextjs/server';
import { log } from 'console';

export default async function Favorite() {
  const { userId } = await auth();

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
      {favProducts.map((product) => (
        <FavList key={product.id} product={product} />
      ))}
    </div>
  );
}
