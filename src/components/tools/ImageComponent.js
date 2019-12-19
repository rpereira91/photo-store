import React from 'react';
import './css/image.css';
import ModalImage from "react-modal-image";

export default class ImageComponent extends React.Component {
    render() {
        return (
            // This uses the modal image package to make the image clickable to enlarge
            <ModalImage
                small={this.props.imgUrl}
                large={this.props.imgUrl}
                hideDownload
            />
        );
    }
}