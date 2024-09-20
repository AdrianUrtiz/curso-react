import { useState, useEffect } from 'react'

export function useBooks() {
  const [books, setBooks] = useState([])
  const [readingList, setReadingList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/public/books.json')
        const data = await response.json()
        setBooks(data.library.map((item) => item.book))
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return { books, readingList, setReadingList }
}
