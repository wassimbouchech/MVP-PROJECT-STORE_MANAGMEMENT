function product({product}) {
    return(
        <div>
            <h2>
                {product.productName}
            </h2>
            <img src={product.image} alt="" />
            <p>{product.details}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
        </div>
    )
}


export default product