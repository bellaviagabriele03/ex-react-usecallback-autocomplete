import { useState, useCallback, useEffect } from 'react'
import AdviceProducts from './components/AdviceProducts'
import { data } from 'react-router-dom'

function App() {

  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])


  const eseguiFetch = async (query) => {

    if (!query.trim()) {
      setProducts([])
      return;
    }
    try {
      const res = await fetch(`http://localhost:3333/products?search=${query}`)
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }





  useEffect(() => {
    eseguiFetch(query)
  }, [query])






  return (
    <>
      <h1 className='title'>I PRODOTTI DI BOOLANDO !</h1>
      <div className='container'>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text"
          placeholder='Cerca..' />
        {products.length > 0 && (<>
          {products.map((p) => (
            <AdviceProducts product={p} key={p.id} />
          ))}
        </>)}
      </div>
    </>
  )
}

export default App
