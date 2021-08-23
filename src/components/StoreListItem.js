function StoreListItem(props) {
  // console.log('Inside StoreListItem: ', props)

  const item = props.item

  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={() => props.addToCart(item)}>Add to cart</button>
    </li>
  )
}

export default StoreListItem
