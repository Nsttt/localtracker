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
  animeList: [
    {
      Media: {
        id: 117193,
        title: {
          userPreferred: 'Boku no Hero Academia 5',
          romaji: 'Boku no Hero Academia 5',
          english: 'My Hero Academia Season 5',
          native: '僕のヒーローアカデミア 5',
        },
        coverImage: {
          extraLarge:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx117193-yZUKig9K220H.jpg',
          large:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx117193-yZUKig9K220H.jpg',
        },
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/117193-37OySoeOMN0z.jpg',
        startDate: {
          year: 2021,
          month: 3,
          day: 27,
        },
        endDate: {
          year: null,
          month: null,
          day: null,
        },
        description:
          'The fifth season of <i>Boku no Hero Academia</i>.<br>\n<br>\nThe rivalry between Class 1-A and Class 1-B heats up in a joint training battle. Eager to be a part of the hero course, brainwashing buff Shinso is tasked with competing on both sides.\n<br><br>\nBut as each team faces their own weaknesses and discovers new strengths, this showdown might just become a toss-up.<br><br>\n(Source: Funimation)',
        season: 'SPRING',
        seasonYear: 2021,
        type: 'ANIME',
        format: 'TV',
        status: 'RELEASING',
        episodes: 25,
        duration: 24,
        chapters: null,
        volumes: null,
        genres: ['Action', 'Adventure', 'Comedy'],
        synonyms: ['BNHA 5', 'MHA 5', '我的英雄学院 5', '我的英雄学院第五季'],
        source: 'MANGA',
        isAdult: false,
        isLocked: false,
        averageScore: 77,
        popularity: 171390,
        favourites: 5187,
        hashtag: '#heroaca_a',
        countryOfOrigin: 'JP',
        isLicensed: true,
        isFavourite: false,
        isRecommendationBlocked: false,
        nextAiringEpisode: {
          airingAt: 1631349000,
          timeUntilAiring: 311395,
          episode: 23,
        },
        characterPreview: {
          edges: [
            {
              id: 211035,
              role: 'MAIN',
              name: null,
              voiceActors: [
                {
                  id: 116971,
                  name: {
                    userPreferred: 'Daiki Yamashita',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n116971-r6Yn9mDyzBqU.png',
                  },
                },
              ],
              node: {
                id: 89028,
                name: {
                  userPreferred: 'Izuku Midoriya',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b89028-acm2JHSJyQct.png',
                },
              },
            },
            {
              id: 252612,
              role: 'MAIN',
              name: null,
              voiceActors: [
                {
                  id: 95270,
                  name: {
                    userPreferred: 'Nobuhiko Okamoto',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n95270-LqNIF238L59u.png',
                  },
                },
              ],
              node: {
                id: 88892,
                name: {
                  userPreferred: 'Katsuki Bakugou',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b88892-Crsq5Ok0H2T4.png',
                },
              },
            },
            {
              id: 265363,
              role: 'MAIN',
              name: null,
              voiceActors: [
                {
                  id: 95672,
                  name: {
                    userPreferred: 'Yuuki Kaji',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n95672-RN4nm0OFwCyU.png',
                  },
                },
              ],
              node: {
                id: 89220,
                name: {
                  userPreferred: 'Shouto Todoroki',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b89220-AuWlCcZ8fy4l.png',
                },
              },
            },
            {
              id: 293302,
              role: 'MAIN',
              name: null,
              voiceActors: [
                {
                  id: 96764,
                  name: {
                    userPreferred: 'Kouki Uchiyama',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n96764-zzHkGJUSV4LJ.png',
                  },
                },
              ],
              node: {
                id: 89226,
                name: {
                  userPreferred: 'Tomura Shigaraki',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b89226-IhENW81LofQe.jpg',
                },
              },
            },
            {
              id: 252608,
              role: 'SUPPORTING',
              name: null,
              voiceActors: [
                {
                  id: 95098,
                  name: {
                    userPreferred: 'Wataru Hatano',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n95098-x6T2xOTuvkuY.jpg',
                  },
                },
              ],
              node: {
                id: 89242,
                name: {
                  userPreferred: 'Hitoshi Shinsou',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b89242-WzA9m3CtRUeb.png',
                },
              },
            },
            {
              id: 265357,
              role: 'SUPPORTING',
              name: null,
              voiceActors: [
                {
                  id: 106622,
                  name: {
                    userPreferred: 'Ayane Sakura',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n106622-GgJGpn3X5xHb.jpg',
                  },
                },
              ],
              node: {
                id: 89221,
                name: {
                  userPreferred: 'Ochako Uraraka',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b89221-gyqjTx68CAqr.jpg',
                },
              },
            },
          ],
        },
        staffPreview: {
          edges: [
            {
              id: 178904,
              role: 'Original Creator',
              node: {
                id: 104834,
                name: {
                  userPreferred: 'Kouhei Horikoshi',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/n104834-Bny7KyukbSdy.png',
                },
              },
            },
            {
              id: 224433,
              role: 'Chief Director',
              node: {
                id: 108677,
                name: {
                  userPreferred: 'Kenji Nagasaki',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/108677-G5RbEFpEwuMI.jpg',
                },
              },
            },
            {
              id: 224435,
              role: 'Director',
              node: {
                id: 120103,
                name: {
                  userPreferred: 'Masahiro Mukai',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/n120103-srfVCz7aHlPA.jpg',
                },
              },
            },
            {
              id: 224432,
              role: 'Series Composition',
              node: {
                id: 97471,
                name: {
                  userPreferred: 'Yousuke Kuroda',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/n97471-QakOe67tAErz.png',
                },
              },
            },
            {
              id: 224431,
              role: 'Character Design',
              node: {
                id: 101458,
                name: {
                  userPreferred: 'Yoshihiko Umakoshi',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/n101458-1joGKk5MERvS.png',
                },
              },
            },
            {
              id: 224434,
              role: 'Character Design',
              node: {
                id: 145863,
                name: {
                  userPreferred: 'Hitomi Odashima',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/n145863-sWqxpJVzjknY.png',
                },
              },
            },
            {
              id: 251929,
              role: 'Art Director',
              node: {
                id: 110647,
                name: {
                  userPreferred: 'Shigemi Ikeda',
                },
                language: 'Japanese',
                image: {
                  large: 'https://s4.anilist.co/file/anilistcdn/staff/large/15647.jpg',
                },
              },
            },
            {
              id: 251930,
              role: 'Art Director',
              node: {
                id: 120001,
                name: {
                  userPreferred: 'Yukiko Maruyama',
                },
                language: 'Japanese',
                image: {
                  large: 'https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg',
                },
              },
            },
          ],
        },
        studios: {
          edges: [
            {
              isMain: true,
              node: {
                id: 4,
                name: 'bones',
              },
            },
            {
              isMain: false,
              node: {
                id: 166,
                name: 'Movic',
              },
            },
            {
              isMain: false,
              node: {
                id: 53,
                name: 'Dentsu',
              },
            },
            {
              isMain: false,
              node: {
                id: 757,
                name: 'Sony Music Entertainment',
              },
            },
            {
              isMain: false,
              node: {
                id: 6570,
                name: 'Shueisha',
              },
            },
            {
              isMain: false,
              node: {
                id: 236,
                name: 'YTV',
              },
            },
          ],
        },
        externalLinks: [
          {
            site: 'Official Site',
            url: 'https://heroaca.com/',
          },
          {
            site: 'Twitter',
            url: 'https://twitter.com/heroaca_anime',
          },
          {
            site: 'Crunchyroll',
            url: 'https://www.crunchyroll.com/my-hero-academia/',
          },
          {
            site: 'Funimation',
            url: 'https://www.funimation.com/shows/my-hero-academia/',
          },
          {
            site: 'VRV',
            url: 'https://vrv.co/series/G6NQ5DWZ6/My-Hero-Academia',
          },
          {
            site: 'AnimeLab',
            url: 'https://www.animelab.com/shows/my-hero-academia',
          },
          {
            site: 'Hulu',
            url: 'https://www.hulu.com/series/my-hero-academia-36e318dc-3daf-47fb-8219-9e3cb5cd28f2',
          },
          {
            site: 'Official Site',
            url: 'https://www.iq.com/album/1qbbiha65ed',
          },
          {
            site: 'Netflix',
            url: 'https://www.netflix.com/title/80135674',
          },
        ],
        trailer: {
          id: '5AkQ0GxQTQM',
          site: 'youtube',
        },
        tags: [
          {
            id: 172,
            name: 'Superhero',
            description:
              'Prominently features super-powered humans who aim to serve the greater good.',
            rank: 97,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 66,
            name: 'Super Power',
            description:
              'Prominently features characters with special abilities that allow them to do what would normally be physically or logically impossible.',
            rank: 93,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 56,
            name: 'Shounen',
            description: 'Target demographic is teenage and young adult males.',
            rank: 90,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 82,
            name: 'Male Protagonist',
            description: 'Main character is male.',
            rank: 88,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 46,
            name: 'School',
            description:
              'Partly or completely set in a primary or secondary educational institution.',
            rank: 81,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 326,
            name: 'Cultivation',
            description:
              'Features characters using training, often martial arts-related, and other special methods to cultivate life force and gain strength or immortality.',
            rank: 79,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 85,
            name: 'Tragedy',
            description: 'Centers around tragic events and unhappy endings.',
            rank: 76,
            isMediaSpoiler: true,
            isGeneralSpoiler: true,
            userId: null,
          },
          {
            id: 105,
            name: 'Ensemble Cast',
            description:
              'Features a large cast of characters with (almost) equal screen time and importance to the plot.',
            rank: 73,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 595,
            name: 'Urban',
            description: 'Partly or completely set in a city.',
            rank: 70,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 648,
            name: 'Crime',
            description:
              'Centers around unlawful activities punishable by the state or other authority.',
            rank: 69,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 321,
            name: 'Urban Fantasy',
            description:
              'Set in a world similar to the real world, but with the existence of magic or other supernatural elements.',
            rank: 68,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 98,
            name: 'Female Protagonist',
            description: 'Main character is female.',
            rank: 40,
            isMediaSpoiler: true,
            isGeneralSpoiler: false,
            userId: null,
          },
        ],
      },
    },
    {
      Media: {
        id: 117193,
        title: {
          userPreferred: 'Boku no Hero Academia 5',
          romaji: 'Boku no Hero Academia 5',
          english: 'My Hero Academia Season 5',
          native: '僕のヒーローアカデミア 5',
        },
        coverImage: {
          extraLarge:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx117193-yZUKig9K220H.jpg',
          large:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx117193-yZUKig9K220H.jpg',
        },
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/117193-37OySoeOMN0z.jpg',
        startDate: {
          year: 2021,
          month: 3,
          day: 27,
        },
        endDate: {
          year: null,
          month: null,
          day: null,
        },
        description:
          'The fifth season of <i>Boku no Hero Academia</i>.<br>\n<br>\nThe rivalry between Class 1-A and Class 1-B heats up in a joint training battle. Eager to be a part of the hero course, brainwashing buff Shinso is tasked with competing on both sides.\n<br><br>\nBut as each team faces their own weaknesses and discovers new strengths, this showdown might just become a toss-up.<br><br>\n(Source: Funimation)',
        season: 'SPRING',
        seasonYear: 2021,
        type: 'ANIME',
        format: 'TV',
        status: 'RELEASING',
        episodes: 25,
        duration: 24,
        chapters: null,
        volumes: null,
        genres: ['Action', 'Adventure', 'Comedy'],
        synonyms: ['BNHA 5', 'MHA 5', '我的英雄学院 5', '我的英雄学院第五季'],
        source: 'MANGA',
        isAdult: false,
        isLocked: false,
        averageScore: 77,
        popularity: 171390,
        favourites: 5187,
        hashtag: '#heroaca_a',
        countryOfOrigin: 'JP',
        isLicensed: true,
        isFavourite: false,
        isRecommendationBlocked: false,
        nextAiringEpisode: {
          airingAt: 1631349000,
          timeUntilAiring: 311395,
          episode: 23,
        },
        characterPreview: {
          edges: [
            {
              id: 211035,
              role: 'MAIN',
              name: null,
              voiceActors: [
                {
                  id: 116971,
                  name: {
                    userPreferred: 'Daiki Yamashita',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n116971-r6Yn9mDyzBqU.png',
                  },
                },
              ],
              node: {
                id: 89028,
                name: {
                  userPreferred: 'Izuku Midoriya',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b89028-acm2JHSJyQct.png',
                },
              },
            },
            {
              id: 252612,
              role: 'MAIN',
              name: null,
              voiceActors: [
                {
                  id: 95270,
                  name: {
                    userPreferred: 'Nobuhiko Okamoto',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n95270-LqNIF238L59u.png',
                  },
                },
              ],
              node: {
                id: 88892,
                name: {
                  userPreferred: 'Katsuki Bakugou',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b88892-Crsq5Ok0H2T4.png',
                },
              },
            },
            {
              id: 265363,
              role: 'MAIN',
              name: null,
              voiceActors: [
                {
                  id: 95672,
                  name: {
                    userPreferred: 'Yuuki Kaji',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n95672-RN4nm0OFwCyU.png',
                  },
                },
              ],
              node: {
                id: 89220,
                name: {
                  userPreferred: 'Shouto Todoroki',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b89220-AuWlCcZ8fy4l.png',
                },
              },
            },
            {
              id: 293302,
              role: 'MAIN',
              name: null,
              voiceActors: [
                {
                  id: 96764,
                  name: {
                    userPreferred: 'Kouki Uchiyama',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n96764-zzHkGJUSV4LJ.png',
                  },
                },
              ],
              node: {
                id: 89226,
                name: {
                  userPreferred: 'Tomura Shigaraki',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b89226-IhENW81LofQe.jpg',
                },
              },
            },
            {
              id: 252608,
              role: 'SUPPORTING',
              name: null,
              voiceActors: [
                {
                  id: 95098,
                  name: {
                    userPreferred: 'Wataru Hatano',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n95098-x6T2xOTuvkuY.jpg',
                  },
                },
              ],
              node: {
                id: 89242,
                name: {
                  userPreferred: 'Hitoshi Shinsou',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b89242-WzA9m3CtRUeb.png',
                },
              },
            },
            {
              id: 265357,
              role: 'SUPPORTING',
              name: null,
              voiceActors: [
                {
                  id: 106622,
                  name: {
                    userPreferred: 'Ayane Sakura',
                  },
                  language: 'Japanese',
                  image: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/staff/large/n106622-GgJGpn3X5xHb.jpg',
                  },
                },
              ],
              node: {
                id: 89221,
                name: {
                  userPreferred: 'Ochako Uraraka',
                },
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/character/large/b89221-gyqjTx68CAqr.jpg',
                },
              },
            },
          ],
        },
        staffPreview: {
          edges: [
            {
              id: 178904,
              role: 'Original Creator',
              node: {
                id: 104834,
                name: {
                  userPreferred: 'Kouhei Horikoshi',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/n104834-Bny7KyukbSdy.png',
                },
              },
            },
            {
              id: 224433,
              role: 'Chief Director',
              node: {
                id: 108677,
                name: {
                  userPreferred: 'Kenji Nagasaki',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/108677-G5RbEFpEwuMI.jpg',
                },
              },
            },
            {
              id: 224435,
              role: 'Director',
              node: {
                id: 120103,
                name: {
                  userPreferred: 'Masahiro Mukai',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/n120103-srfVCz7aHlPA.jpg',
                },
              },
            },
            {
              id: 224432,
              role: 'Series Composition',
              node: {
                id: 97471,
                name: {
                  userPreferred: 'Yousuke Kuroda',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/n97471-QakOe67tAErz.png',
                },
              },
            },
            {
              id: 224431,
              role: 'Character Design',
              node: {
                id: 101458,
                name: {
                  userPreferred: 'Yoshihiko Umakoshi',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/n101458-1joGKk5MERvS.png',
                },
              },
            },
            {
              id: 224434,
              role: 'Character Design',
              node: {
                id: 145863,
                name: {
                  userPreferred: 'Hitomi Odashima',
                },
                language: 'Japanese',
                image: {
                  large:
                    'https://s4.anilist.co/file/anilistcdn/staff/large/n145863-sWqxpJVzjknY.png',
                },
              },
            },
            {
              id: 251929,
              role: 'Art Director',
              node: {
                id: 110647,
                name: {
                  userPreferred: 'Shigemi Ikeda',
                },
                language: 'Japanese',
                image: {
                  large: 'https://s4.anilist.co/file/anilistcdn/staff/large/15647.jpg',
                },
              },
            },
            {
              id: 251930,
              role: 'Art Director',
              node: {
                id: 120001,
                name: {
                  userPreferred: 'Yukiko Maruyama',
                },
                language: 'Japanese',
                image: {
                  large: 'https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg',
                },
              },
            },
          ],
        },
        studios: {
          edges: [
            {
              isMain: true,
              node: {
                id: 4,
                name: 'bones',
              },
            },
            {
              isMain: false,
              node: {
                id: 166,
                name: 'Movic',
              },
            },
            {
              isMain: false,
              node: {
                id: 53,
                name: 'Dentsu',
              },
            },
            {
              isMain: false,
              node: {
                id: 757,
                name: 'Sony Music Entertainment',
              },
            },
            {
              isMain: false,
              node: {
                id: 6570,
                name: 'Shueisha',
              },
            },
            {
              isMain: false,
              node: {
                id: 236,
                name: 'YTV',
              },
            },
          ],
        },
        externalLinks: [
          {
            site: 'Official Site',
            url: 'https://heroaca.com/',
          },
          {
            site: 'Twitter',
            url: 'https://twitter.com/heroaca_anime',
          },
          {
            site: 'Crunchyroll',
            url: 'https://www.crunchyroll.com/my-hero-academia/',
          },
          {
            site: 'Funimation',
            url: 'https://www.funimation.com/shows/my-hero-academia/',
          },
          {
            site: 'VRV',
            url: 'https://vrv.co/series/G6NQ5DWZ6/My-Hero-Academia',
          },
          {
            site: 'AnimeLab',
            url: 'https://www.animelab.com/shows/my-hero-academia',
          },
          {
            site: 'Hulu',
            url: 'https://www.hulu.com/series/my-hero-academia-36e318dc-3daf-47fb-8219-9e3cb5cd28f2',
          },
          {
            site: 'Official Site',
            url: 'https://www.iq.com/album/1qbbiha65ed',
          },
          {
            site: 'Netflix',
            url: 'https://www.netflix.com/title/80135674',
          },
        ],
        trailer: {
          id: '5AkQ0GxQTQM',
          site: 'youtube',
        },
        tags: [
          {
            id: 172,
            name: 'Superhero',
            description:
              'Prominently features super-powered humans who aim to serve the greater good.',
            rank: 97,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 66,
            name: 'Super Power',
            description:
              'Prominently features characters with special abilities that allow them to do what would normally be physically or logically impossible.',
            rank: 93,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 56,
            name: 'Shounen',
            description: 'Target demographic is teenage and young adult males.',
            rank: 90,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 82,
            name: 'Male Protagonist',
            description: 'Main character is male.',
            rank: 88,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 46,
            name: 'School',
            description:
              'Partly or completely set in a primary or secondary educational institution.',
            rank: 81,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 326,
            name: 'Cultivation',
            description:
              'Features characters using training, often martial arts-related, and other special methods to cultivate life force and gain strength or immortality.',
            rank: 79,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 85,
            name: 'Tragedy',
            description: 'Centers around tragic events and unhappy endings.',
            rank: 76,
            isMediaSpoiler: true,
            isGeneralSpoiler: true,
            userId: null,
          },
          {
            id: 105,
            name: 'Ensemble Cast',
            description:
              'Features a large cast of characters with (almost) equal screen time and importance to the plot.',
            rank: 73,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 595,
            name: 'Urban',
            description: 'Partly or completely set in a city.',
            rank: 70,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 648,
            name: 'Crime',
            description:
              'Centers around unlawful activities punishable by the state or other authority.',
            rank: 69,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 321,
            name: 'Urban Fantasy',
            description:
              'Set in a world similar to the real world, but with the existence of magic or other supernatural elements.',
            rank: 68,
            isMediaSpoiler: false,
            isGeneralSpoiler: false,
            userId: null,
          },
          {
            id: 98,
            name: 'Female Protagonist',
            description: 'Main character is female.',
            rank: 40,
            isMediaSpoiler: true,
            isGeneralSpoiler: false,
            userId: null,
          },
        ],
      },
    },
  ],
  showList: [],
  movieList: [],
  bookList: [],

  addAnime: (anime) => set((state) => ({ animeList: [...state.animeList, anime] })),
}));

export default useStore;
