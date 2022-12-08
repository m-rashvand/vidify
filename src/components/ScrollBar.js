import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ScrollBar = ({ children }) => {

    const responsive = {
        lg: {
            breakpoint: { max: 3000, min: 1200 },
            items: 5,
            paritialVisibilityGutter: 60
        },
        md: {
            breakpoint: { max: 1200, min: 620 },
            items: 4,
            paritialVisibilityGutter: 50
        },
        sm: {
            breakpoint: { max: 620, min: 400 },
            items: 2,
            paritialVisibilityGutter: 30
        },
        xs: {
            breakpoint: { max: 400, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };

    return (
        <Carousel
            removeArrowOnDeviceType={["xs", "sm", "md"]}
            swipeable={true}
            draggable={true}
            infinite={true}
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}
        >
            {children}
        </Carousel>
    );
};

export default ScrollBar;
