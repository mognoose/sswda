import { useAsyncData } from '#app'

const isClient = () => typeof window !== 'undefined'

const SINGA_API_URL = 'https://api.singa.com/v1.4/genres/'
const CACHE_EXPIRATION = 60 * 60 * 1000 // 1 hour

interface SingaGenre {
  id: number;
  resource_id: string;
  name: string;
  created: string;
  updated: string;
  imagebank: {
    id: number;
    title: string;
    images: string;
  };
}

export const useGenres = () => {
  const fetchGenres = async (): Promise<SingaGenre[]> => {
    const response = await $fetch<{ results: SingaGenre[] }>(SINGA_API_URL);
    return response.results;
  }

  const { data, pending, error, refresh } = useAsyncData<SingaGenre[]>(
    'genres',
    async () => {
      // localStorage is only available on the client
      if (isClient()) {
        const cachedData = localStorage.getItem('genres')
        const cachedTimestamp = localStorage.getItem('genres_timestamp')

        if (cachedData && cachedTimestamp) {
          const isCacheValid =
            Date.now() - parseInt(cachedTimestamp, 10) < CACHE_EXPIRATION;
          if (isCacheValid) {
            try {
              const parsed = JSON.parse(cachedData);
              if (Array.isArray(parsed)) {
                return parsed;
              }
            } catch (e) {
              // cached data is corrupt, proceed to fetch
            }
          }
          // cache is invalid or corrupt, remove it
          localStorage.removeItem('genres');
          localStorage.removeItem('genres_timestamp');
        }
      }

      const genres = await fetchGenres();
      console.log(genres);
      
      // localStorage is only available on the client
      if (isClient()) {
        try {
          localStorage.setItem('genres', JSON.stringify(genres))
          localStorage.setItem('genres_timestamp', Date.now().toString())
        } catch (e) {
          console.error('Failed to save to localStorage', e);
        }
      }
      return genres
    }
  )

  return { data, pending, error, refresh }
}