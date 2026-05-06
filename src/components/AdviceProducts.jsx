import { useState } from "react";

const AdviceProducts = ({ product }) => {
    return (

        <div className="adv">
            <h2>{product.name} - <strong>Brand:</strong> {product.brand}</h2>
        </div>
    )
}

export default AdviceProducts;