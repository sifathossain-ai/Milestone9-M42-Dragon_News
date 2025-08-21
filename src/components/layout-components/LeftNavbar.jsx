import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    // const {category_name} = categories;

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className='font-semibold text-lg mb-4'>All Category</h2>
            <button className='btn bg-sky-300 border-none font-normal'><Link to={'/asepase'}>asepase</Link></button>
            <div className='flex flex-col justify-star gap-3 my-5'>
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} key={category.category_id} className='btn bg-base-100 border-none'>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;