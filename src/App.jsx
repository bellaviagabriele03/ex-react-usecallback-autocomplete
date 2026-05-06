import { useState, useCallback, useEffect } from 'react'
import AdviceProducts from './components/AdviceProducts'
import { data } from 'react-router-dom'

function App() {

  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])
  const [filterAdv, setFilterAdv] = useState([])


  const eseguiFetch = () => {
    fetch(`http://localhost:3333/products?search=${query}`)
      .then(res => res.json())
      .then(data => setProducts(data)
      )
  }

  const advProduct = () => {
    const filterProduct = products.filter((p) => p.brand.toLowerCase().includes(query.toLowerCase()))
    if (filterProduct.length > 0) {
      setFilterAdv(filterProduct)
    } else {
      setFilterAdv(products)
    }
  }


  useEffect(() => {
    eseguiFetch()
    advProduct()


  }, [query])



  console.log(products);


  return (
    <>
      <h1 className='title'>I PRODOTTI DI BOOLANDO !</h1>
      <div className='container'>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text"
          placeholder='Cerca..' />
        {query.length > 0 && (<>
          {filterAdv.map((p) => (
            <AdviceProducts product={p} key={p.id} />
          ))}
        </>)}
      </div>
    </>
  )
}

export default App
