import create from 'zustand';

interface StoreState {
  isUserAuth: boolean;
  authDetails: {};
  animeList: any;
  showList: [];
  movieList: [];
  bookList: [];
  addAnime: (anime: {}) => void;
}

const useStore = create<StoreState>((set) => ({
  isUserAuth: false,
  authDetails: {},
  animeList: [],
  showList: [],
  movieList: [],
  bookList: [],

  addAnime: (anime) => set((state) => ({ animeList: [...state.animeList, anime] })),
}));

export default useStore;
