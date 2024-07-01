import { fetchFavoriteProducts, fetchProduct, prisma } from '@/app/lib/data';
import FavList from '@/app/ui/fav-list/fav-list';
import { auth } from '@clerk/nextjs/server';
import { log } from 'console';

export default async function Favorite() {
  const { userId } = await auth();
  console.log(userId);

  const favorites = await prisma.favorite.findMany({
    where: {
      userClerkId: userId ?? undefined,
    },
  });

  const productIds = favorites.map((favorite) => favorite.productId);
  console.log(productIds);

  // console.log(favorites);
  let favProducts = [];
  for (let productId of productIds) {
    const product = await fetchFavoriteProducts(productId);
    favProducts.push(product);
  }

  return (
    <div>
      {favProducts.map((product) => (
        // <FavList product={product} />
      ))}
    </div>
  );
}
