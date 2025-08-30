import { FaRegEye, FaStar } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { GoShareAndroid } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";

const NewsCard = ({ news }) => {
    // console.log(news);
    const { title, author, image_url, rating, total_view, details, _id } = news;

    return (
        <div className="card bg-base-100 border rounded-md mb-6">
            <div className="bg-[#E7E7E7] flex items-center justify-between">
                <div className="flex items-center gap-3 p-4 border-b">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold">{author.name}</h3>
                        <p className="text-sm text-gray-500">{author.published_date}</p>
                    </div>
                </div>
                <div className="px-4 flex gap-3">
                    <NavLink><FiBookmark></FiBookmark></NavLink>
                    <NavLink><GoShareAndroid></GoShareAndroid></NavLink>
                </div>
            </div>

            <h2 className="px-4 pt-3 text-lg font-semibold leading-snug">
                {title}
            </h2>

            <figure className="px-4 py-4">
                <img
                    src={image_url}
                    alt={title}
                    className="rounded-md w-full max-h-64 object-cover"
                />
            </figure>

            <div className="px-4 pb-3 text-sm text-gray-600">
                {details.length > 150 ? (
                    <>
                        {details.slice(0, 150)}...
                        <Link to={`/news/${_id}`} className="text-orange-500 font-semibold cursor-pointer">
                            {" "}Read More
                        </Link>
                    </>) : (details)
                }
            </div>

            <div className="flex justify-between items-center px-4 py-2 border-t">
                <div className="flex items-center gap-1 text-orange-500">
                    <FaStar />
                    <span className="font-semibold">{rating.number}</span>
                    <span className="ml-1 text-sm text-gray-500">({rating.badge})</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                    <FaRegEye />
                    <span>{total_view}</span>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;
