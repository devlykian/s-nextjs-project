import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function useUser() {
  const { data, mutate, error } = useSWR('/api/user.json', fetcher)

  return {
    // loggedOut,
    user: data,
    mutate,
    error
  }
}
