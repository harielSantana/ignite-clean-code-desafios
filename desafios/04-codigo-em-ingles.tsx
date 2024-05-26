// Código em inglês 
import { useState } from "react"

interface ProductTypes {
  title: string;
  price: string;
}

const productList: ProductTypes[] = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function SearchProduct() {
  const [filteredProdutos, setFilteredProdutos] = useState<ProductTypes[]>([])

  function searchProduto(search: string) {
    const  productsFilter= productList.filter(product => product.title.includes(search))

    setFilteredProdutos(productsFilter)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduto(e.target.value)} />

      {filteredProdutos.map(produto => (
        <div>
          <p>{produto.title}</p>
          <p>{produto.price}</p>
        </div>
      ))}
    </div>
  )
}


