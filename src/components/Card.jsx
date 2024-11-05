import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ gadget }) => {
    const { product_title, product_image, price,  product_id } = gadget;

    return (
        <div className="flex flex-col gap-4 p-3 border border-gray-400 rounded-xl w-full">
            <div className="w-full flex justify-center">
                <img src={product_image} alt={product_title} className="w-11/12 h-[250px] object-cover rounded-xl" />
            </div>

            <span className="font-bold text-xl">{product_title}</span>
            <span className="text-gray-600">Price: ${price} </span>

            <div className="flex">
                <Link to={`/details/${product_id}`} className="w-1/3 p-2 border border-cover text-base font-bold rounded-xl text-cover bg-white">
                    <button>View Details</button>
                </Link>
            </div>
        </div>
    );
};


Card.propTypes = {
    gadget: PropTypes.shape({
        product_title: PropTypes.string.isRequired,
        product_image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        product_id: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
