import { useAsyncData } from '#app'
const SINGA_API_URL = 'https://api.singa.com/v1.4/genres'
const CACHE_EXPIRATION = 60 * 60 * 1000

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
    const response = await useAsyncData(async () => {
      const res = await fetch(SINGA_API_URL)
      return res.json()
    })
    if (!response.ok) {
      throw new Error('Failed to fetch genres')
    }
    return response.json()
  }

  const { data, pending, error, refresh } = useAsyncData<SingaGenre[]>(
    'genres',
    async () => {
      const cachedData = localStorage.getItem('genres')
      const cachedTimestamp = localStorage.getItem('genres_timestamp')

      if (cachedData && cachedTimestamp) {
        const isCacheValid =
          Date.now() - parseInt(cachedTimestamp, 10) < CACHE_EXPIRATION
        if (isCacheValid) {
          return JSON.parse(cachedData)
        }
      }

      const genres = await fetchGenres()
      localStorage.setItem('genres', JSON.stringify(genres))
      localStorage.setItem('genres_timestamp', Date.now().toString())
      return genres
    }
  )

  return { data, pending, error, refresh }
}