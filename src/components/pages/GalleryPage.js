import React from 'react'
import './Gallery.css';
import Gallery from './Gallery';
function GalleryPage() {
    return (
        <div>
            <div className="container-fluid">
                <h1 className="text-center title2">Our Gallery</h1>
                <Gallery />
            </div>
        </div>
    );
}

export default GalleryPage;