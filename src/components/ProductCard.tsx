import Ratings from "./Ratings";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

export default function ProductCard({product}: {product: IProduct}) {

  return (
    <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
		<a href="#">
			<img className="rounded-t-lg p-8" src={product.image} alt="product image" />
        </a>
			<div className="px-5 pb-5">
				<a href="#">
					<h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                        {product.title}
                    </h3>
				</a>
				<Ratings />
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
					<a href="#"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add to cart
                    </a>
				</div>
			</div>
	</div>
  )
}
