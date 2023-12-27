import React from "react";

/**
 * Komponent do wizualizacji pojedynczego obrazka
 * @param {{}} image
 * @returns {Element}
 * @constructor
 */
export default function ImageShow({image}) {
    return <div>
        <img src={image.urls.small} alt={image.alt_description} />
    </div>;
}
