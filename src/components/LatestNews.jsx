import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-gray-200 p-3'>
            <p className='bg-[#D72050] py-1 px-3 text-white font-semibold'>Latest</p>
            <Marquee pauseOnHover='true' speed={40} className='space-x-32'>
                <Link className='font-semibold' to={'/news'}>
                    Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
                </Link>
                <Link className='font-semibold' to={'/news'}>
                    Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
                </Link>
                <Link className='font-semibold' to={'/news'}>
                    Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;