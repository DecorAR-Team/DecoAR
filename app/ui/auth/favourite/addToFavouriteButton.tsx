export default function AddToFavouriteButton() {

<button
      className={`text-gray-600 ${isFavorite ? 'text-red-500' : ''}`}
      onClick={handleAddToFavorites}
    >
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
}