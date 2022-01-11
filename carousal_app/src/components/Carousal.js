import { Fragment, useState, React } from "react";
import "./Carousal.css";
const images = [
  {
    id: 1,
    src: "../../images/bikes/pic1.jpg",
  },
  {
    id: 2,
    src: "../../images/bikes/pic2.jpg",
  },
  {
    id: 3,
    src: "../../images/bikes/pic3.jfif",
  },
  {
    id: 4,
    src: "../../images/bikes/pic4.jpg",
  },
  {
    id: 5,
    src: "../../images/bikes/pic5.jpg",
  },
  {
    id: 6,
    src: "../../images/bikes/pic6.webp",
  },
  {
    id: 7,
    src: "../../images/bikes/pic7.jfif",
  },
  {
    id: 8,
    src: "../../images/bikes/pic8.jpg",
  },
  {
    id: 9,
    src: "../../images/bikes/pic9.webp",
  },
  {
    id: 10,
    src: "../../images/bikes/pic10.png",
  },
  {
    id: 11,
    src: "../../images/bikes/pic11.jfif",
  },
  {
    id: 12,
    src: "../../images/bikes/pic12.webp",
  },
];

export const Carousal = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImageSrc, setSelectedImageSrc] = useState(images[0].src);
  const changeImageHandler = (event) => {
    modifyImageIndexSrc(+event.target.id);
  };

  const leftClickHandler = () => {
    const newIndex =
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
    modifyImageIndexSrc(newIndex);
  };

  const rightClickHandler = () => {
    const newIndex =
      selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1;
    modifyImageIndexSrc(newIndex);
  };

  const modifyImageIndexSrc = (newIndex) => {
    setSelectedImageIndex(newIndex);
    setSelectedImageSrc(images[newIndex].src);
  };

  return (
    <Fragment>
      <div className="preview">
        <div id="prevImage" className="prevNextIcon">
          <span className="fa fa-angle-left" onClick={leftClickHandler}></span>
        </div>
        <img src={selectedImageSrc} alt="" id="currentImage" />
        <div id="nextImage" className="prevNextIcon">
          <span
            className="fa fa-angle-right"
            onClick={rightClickHandler}
          ></span>
        </div>
      </div>
      <hr />
      <div className="images">
        {images.map((image, index) => (
          <img
            key={index}
            id={index}
            src={image.src}
            alt=""
            className={
              selectedImageIndex === index ? "selected-image" : ""
            }
            onClick={changeImageHandler}
          />
        ))}
      </div>
    </Fragment>
  );
};
