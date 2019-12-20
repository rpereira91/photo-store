import React from 'react';
import './css/image.css';
// modal image package
import ModalImage from "react-modal-image";

export default class ImageComponent extends React.Component {
    render() {
        // creates a string to display as the alt text and as a header text if the image is clicked
        const altText = 'Photo Owner: ' + this.props.user
        return (
            // This uses the modal image package to make the image clickable to enlarge
            <ModalImage
                small={this.props.imgUrl}
                large={this.props.imgUrl}
                alt={altText}
                hideDownload
            />
        );
    }
}