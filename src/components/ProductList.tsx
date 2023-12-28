import useApi from "../hooks/useApi";
import { API_URL, PRODUCT_PATH } from "../api/constants";
import ProductCard, { IProduct } from "./ProductCard";

export default function ProductList() {

    const {loading, error, data} = useApi({url: API_URL + PRODUCT_PATH});


    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }

  return (
    <div>
        {
            data.length > 0 && data.map((product : IProduct) => {
                
                return <ProductCard key={product.id} product={product} />
                
            })
        }
    </div>
  )
}
