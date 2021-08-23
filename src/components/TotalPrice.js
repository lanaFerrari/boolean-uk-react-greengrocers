function TotalPrice(props) {
  // console.log('Inside StoreListItem: ', props)

  const item = props.item

  return (
    <span className="total-number">{`${item.item.price * item.quantity}`}</span>
  )
}

export default TotalPrice
