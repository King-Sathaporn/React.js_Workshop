import ImageData from "../ImageData/ImageData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";


const ImageSlider = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const length = ImageData.length;

    const prevSilde = () => {
        currentImage===0 ? setCurrentImage(length-1) : setCurrentImage(currentImage-1)
    }

    const nextSlide = () => {
        currentImage===length-1 ? setCurrentImage(0) : setCurrentImage(currentImage+1)
    };
    

    return(
        <section className="slider">
            <AiOutlineArrowLeft className="left-arrow" onClick={prevSilde}/>
            <AiOutlineArrowRight className="right-arrow" onClick={nextSlide}/>
            {ImageData.map((data, index) => {
                return(
                    <div className={index === currentImage ? "slide active":"slide"} key={index}>
                        {index === currentImage &&
                        (
                            <div>
                                <img src={data.image} alt={data.title} className="image"/>
                                <p>{data.title}</p>
                            </div>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider;