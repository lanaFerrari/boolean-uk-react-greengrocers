import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import StoreListItem from './components/StoreListItem'
import CartListItem from './components/CartListItem'
import TotalPrice from './components/TotalPrice'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

/*
Here's what a cart item should look like
{
  item: {
    id: '001-beetroot',
    name: 'beetroot',
    price: 0.35
  },
  quantity: 1
}
*/

const initialStoreItems = [
  {
    id: '001-beetroot',
    name: 'beetroot',
    price: 0.35
  },
  {
    id: '002-carrot',
    name: 'carrot',
    price: 0.45
  }
]

export default function App() {
  // Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  // cart in state to keep track of quantity of items in cart
  // cart at the start of app will be an empty array
  const [cartItems, setCartItems] = useState([])
  // console.log('Inside App: ', { storeItems: storeItems, cartItems: cartItems })

  // Where your functions ago...
  // addToCart()

  // - Does the item exist in the cart?
  // - If the item doesn't exist in the cart add it to cart with a quantity of 1
  // - If the item does exist in the cart then update the quantity by + 1

  // input: an object that represents a storeItem, an array for the cart
  // output: ??

  // function addToCart(storeItem) {
  //   console.log('Inside addToCart: ', storeItem, cartItems)
  // }

  const addToCart = storeItem => {
    // console.log('Inside addToCart: ', storeItem, cartItems)

    let itemFound = false

    const updatedCartItems = cartItems.map(cartItem => {
      if (storeItem.id === cartItem.item.id) {
        const cartItemToUpdate = {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }

        itemFound = true

        return cartItemToUpdate
      } else {
        return cartItem
      }
    })

    if (!itemFound) {
      const cartItemToAdd = {
        item: storeItem,
        quantity: 1
      }
      // console.log('Item Not Found!')
      setCartItems([...cartItems, cartItemToAdd])
    } else {
      // console.log('Updated Items: ', updatedCartItems)
      setCartItems(updatedCartItems)
    }
  }

  const removeFromCart = storeItem => {
    // console.log('Inside addToCart: ', storeItem, cartItems)
    const updatedCartItems = cartItems.map(cartItem => {
      // if (storeItem.id === cartItem.item.id)
      if (cartItem.quantity === 1) {
        const filteredCartItems = cartItems.filter(
          cartItem => cartItem.quantity < 1
        )

        return filteredCartItems
      } else {
        const cartItemToUpdate = {
          ...cartItem,
          quantity: cartItem.quantity - 1
        }
        return cartItemToUpdate
      }
    })

    setCartItems(updatedCartItems)
    console.log('setCartItems', updatedCartItems)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((item, index) => {
            // console.log('Inside storeItems map: ', item)
            return (
              <StoreListItem key={index} item={item} addToCart={addToCart} />
            )
          })}

          {/* - Add the '/' at the beginning of the src attribute */}

          {/* <li>
            <div class="store--item-icon">
              <img src="/assets/icons/001-beetroot.svg" alt="beetroot" />
            </div>
            <button>Add to cart</button>
          </li> */}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Wrtite some code here... */}
            {cartItems.map((item, index) => {
              // console.log('Inside cartItems MAP: ', item)
              return (
                <CartListItem
                  key={index}
                  item={item}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              )
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            {cartItems.map((item, index) => {
              // console.log('Inside cartItems MAP: ', item)
              return <TotalPrice key={index} item={item} />
            })}
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
