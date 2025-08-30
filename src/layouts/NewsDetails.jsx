import React from 'react';
import Header from '../components/Header';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNavbar from '../components/layout-components/RightNavbar';

const NewsDetails = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
            </header>
            <main className='my-16 grid md:grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    DetailsContent
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;