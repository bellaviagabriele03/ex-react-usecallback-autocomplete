import { useState, useCallback, useEffect } from 'react'
import AdviceProducts from './components/AdviceProducts'
import { data } from 'react-router-dom'

function App() {

  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])


  const eseguiFetch = () => {

    if (!query.trim()) {
      setProducts([])
      return;
    }

    fetch(`http://localhost:3333/products?search=${query}`)
      .then(res => res.json())
      .then(data => setProducts(data)
      )
  }




  useEffect(() => {
    eseguiFetch()
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
