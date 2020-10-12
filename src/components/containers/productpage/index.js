import React from 'react';
import { useParams } from 'react-router-dom'
import {useAxiosGet} from "../../../hooks/httpsRequest";

function ProductPage () {
    const { id } = useParams()
    const url = `https://5f8407fe6b97440016f4eed8.mockapi.io/api/product/${id}`

    let product = useAxiosGet(url)


if(product.data){
    return (
        <div className="product p-2 m-2 bg-gray-100 shadow">
            <h1>
                {product.data.Title}
            </h1>
           <h2>{product.data.Price}</h2>
           <h2>{product.data.Description}</h2>
        </div>
    );
}else if(product.loading){
    return (
        <div>
            <h1>Data is being loaded...</h1>
        </div>
    )
}else if(product.error){
    return(
        <div>Product { id } could not be found</div>
    )
}

return(
    <div>Empty dude</div>
)

}

export default ProductPage;
