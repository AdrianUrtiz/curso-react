import { useBooks } from './useBooks'

function App() {
  const { books, readingList, setReadingList } = useBooks()

  const handleAddBook = (book) => {
    setReadingList([...readingList, book])
  }

  const handleRemoveBook = (book) => {
    setReadingList((prevState) =>
      prevState.filter((item) => item.ISBN !== book.ISBN),
    )
  }

  return (
    <div className='flex gap-10 bg-slate-100'>
      <div className='flex flex-wrap gap-4 p-4 w-3/4 bg-white'>
        {books.map((book) => (
          <div key={book.ISBN} className='border rounded-lg p-4 w-52 shadow-sm'>
            <img
              src={book.cover}
              alt={book.title}
              className='w-auto h-auto rounded'
            />
            <h2 className='my-2'>{book.title}</h2>
            <p className='my-2'>{book.author.name}</p>
            <p className='my-2'> {book.synopsis}</p>
            <button
              onClick={() => handleAddBook(book)}
              type='button'
              className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
              Agregar
            </button>
          </div>
        ))}
      </div>
      <div className='w-1/4'>
        <h2 className='text-center text-2xl font-semibold'>Lista de lectura</h2>
        {readingList.length > 0 ? (
          <ul>
            {readingList.map((book, index) => (
              <li key={index} className='p-2'>
                <img
                  src={book.cover}
                  alt={book.title}
                  className='w-16 h-16 object-cover rounded-lg'
                />
                <div>
                  <h3 className='text-sm font-semibold'>{book.title}</h3>
                  <p className='text-xs'>{book.author.name}</p>
                </div>
                <button
                  onClick={() => handleRemoveBook(book)}
                  type='button'
                  className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center'>No hay libros en la lista de lectura</p>
        )}
      </div>
    </div>
  )
}

export default App
