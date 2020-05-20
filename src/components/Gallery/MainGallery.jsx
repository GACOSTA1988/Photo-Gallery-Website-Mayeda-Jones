import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../../api/Photos";
import Container from "react-bootstrap/Container";
import Navbar from "../Navbar/Navbar.jsx";
import "./MainGallery.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function MainGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container fluid>
      <br />
      <br />
      <div className="externalBorder">
        <div className="headerMenuWrapper">
          <p id="headerText">GALLERY</p>
          <div className="dropDownContainer">
            <DropdownButton
              variant=""
              size="lg"
              id="dropdown-item-button"
              title="MENU"
            >
              <Dropdown.Item href="#/" as="a">
                HOME
              </Dropdown.Item>
              <Dropdown.Item href="#/about" as="a">
                ABOUT
              </Dropdown.Item>
              <Dropdown.Item href="#/mainGallery" as="a">
                GALLERY
              </Dropdown.Item>
              <Dropdown.Item href="#/shoppingCart" as="a">
                GALLERY
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="mainGalleryContainer">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
      <br />
      <br />
    </Container>
  );
}

export default MainGallery;
