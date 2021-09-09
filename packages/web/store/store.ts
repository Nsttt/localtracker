import create from 'zustand';

export const useStore = create((set) => ({
  isUserAuth: false,
  authDetails: {},
  animeList: [],
  showList: [],
  bookList: [],
  movieList: [],

  addItem: (item: ItemEntity) =>
    set((state) => ({
      animeList: [
        {
          id: Math.random(),
          name: item.name,
        },
      ],
    })),
}));
