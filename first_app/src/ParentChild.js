import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function ParentChild () {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default ParentChild;