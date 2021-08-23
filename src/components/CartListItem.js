function CartListItem(props) {
  // console.log('Inside StoreListItem: ', props)

  const item = props.item.item

  // console.log('Item.Name inside CartListItem: ', item.name)
  // console.log('Quantity', props.item.quantity)
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`/assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{`${item.name}`}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => props.removeFromCart(item)}
      >
        -
      </button>
      <span className="quantity-text center">{props.item.quantity}</span>

      <button
        className="quantity-btn add-btn center"
        onClick={() => props.addToCart(item)}
      >
        +
      </button>
    </li>
  )
}

export default CartListItem
