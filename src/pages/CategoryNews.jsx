import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../components/NewsCard';

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    // console.log(news);
    return (
        <div>
            <h2 className='text-lg font-semibold'>Dragon News Home</h2>
            <div className='my-5'>
                {
                    news.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;