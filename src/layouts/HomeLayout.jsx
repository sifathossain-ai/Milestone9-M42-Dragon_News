import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNavbar from '../components/layout-components/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav className='w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
            </nav>

            <main className='w-11/12 mx-auto my-16 grid md:grid-cols-12 gap-5'>
                <aside className='col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;