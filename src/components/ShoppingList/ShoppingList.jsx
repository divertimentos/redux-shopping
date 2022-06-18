import React, { useEffect } from 'react'
import { Wrapper, Title, Array } from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox'
import { selectAllProducts } from '../../store/Products/Products.selectors'
import { useSelector } from 'react-redux'

function ShoppingList({ title, products, onToggle }) {

  const productsFromRedux = useSelector(selectAllProducts)

  useEffect(() => {
    console.log("Redux:")
    console.dir(productsFromRedux)
    console.log("Prop:")
    console.table(products)
  }, [productsFromRedux, products])

  return <Wrapper>
    <Title>
      {title}:
    </Title>
    <Array>
      {
        products.map(product =>
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() => onToggle(product.id, product.checked, product.name)}
          />
        )
      }
    </Array>
  </Wrapper>
}

export default ShoppingList
