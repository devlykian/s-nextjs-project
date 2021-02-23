import useSWR from 'swr'
import Fuse from 'fuse.js'
import { useState } from 'react'
const options = {
  shouldSort: true,
  threshold: 0.3,
  minMatchCharLength: 2,
  keys: ['name']
}
function search(list, pattern) {
  const fuse = new Fuse(list, options)
  return fuse.search(pattern).map((current) => current.item)
}
const fetcher = (url) => fetch(url).then((res) => res.json())
interface Props {
  type: string
  text?: any
  category?: any
  offset?: number
  limit?: number
}
export default function useVendors(variables: Props) {
  const { type, text, category, offset = 0, limit = 20 } = variables ?? {}
  const { data, mutate, error } = useSWR('/api/vendors.json', fetcher)
  const loading = !data && !error

  let vendors = data?.filter((current) => current.type === type)
  if (category) {
    vendors = vendors.filter((item) => item.categories.includes(category))
  }
  if (text) {
    vendors = search(vendors, text)
  }
  return {
    loading,
    error,
    data: vendors?.slice(offset, offset + limit),
    mutate
  }
}
