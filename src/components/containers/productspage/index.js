import React from 'react';
import { Link } from 'react-router-dom'
import {useAxiosGet} from "../../../hooks/httpsRequest";


function ProductsPage() {
    let content = null
    const url = `https://5f8407fe6b97440016f4eed8.mockapi.io/api/product`

        let products = useAxiosGet(url)

    if(products.error){

        content = <div className="products">
                <h1>An error occured while requesting items</h1>
            </div>;

    }
    if(products.loading){
         content =   <div className="products">
                <h1>The products are loading...</h1>
            </div>;

    }
    if(products.data){

        content =
            products.data.map((product) =>

                    <div key={product.id} className="product p-2 m-2 bg-gray-100 shadow" >
                    {product.Title}
                        <Link to={`/product/${product.id}`} key={product.id}>
                            More
                        </Link>
                </div>

            )

}
    return(
        <div>
        <h1>Latest Additions...</h1>
            {content}
        </div>
    )
    }


export default ProductsPage;
