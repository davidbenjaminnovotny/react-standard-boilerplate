import React, {useEffect, useState} from "react";
import Axios from "axios";

export function useAxiosGet(url){
    const [products, setProducts] = useState({
        data:null,
        loading: true,
        error:false
    })

    useEffect( () => {
        Axios.get(url)
            .then(res => {
                setProducts({
                    data: res.data,
                    loading:false,
                    error:false,
                })

            })
            .catch(error => {
                setProducts({
                    data:null,
                    loading:false,
                    error:true,
                })
            })
    }, [url])

    return products
}
