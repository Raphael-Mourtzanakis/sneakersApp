function Cart({cartItems}) {
    const totalItems = cartItems.reduce((sum, item) =>
        sum + item.quantity,0);
    const totalPrice = cartItems.reduce((sum, item) =>
        sum + (item.prix) * (item.quantity),0);
    return (
        <span>Blabla</span>
    )
}

export default Cart;