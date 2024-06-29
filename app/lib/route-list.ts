export const routes = {
  home: '/',
  favorites: '/profile/favorites',
  signin: 'api/auth/signin',
  profile: '/profile',
  subCategoryProducts: (subcategoryId: string) =>
    `/categories/${subcategoryId}`,
  details: (id: string) => `/product/${id}/details`,
  details3D: (id: string) => `/product/${id}/details/3d`,
};
