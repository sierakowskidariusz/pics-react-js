import React from "react";
import ImageShow from "./ImageShow";
import './ImageList.css';
/**
 * Komponent dla listy z obrazkami
 * @param {[]} images
 * @returns {Element}
 * @constructor
 */
export default function ImageList({images}) {
    const renderImages = () => {
        return images.map(image => <ImageShow image={image} key={image.id} />)
    }
    return <div className="image-list">{renderImages()}</div>;
}
