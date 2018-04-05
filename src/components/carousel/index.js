import carouselContainer from 'containers/CarouselContainer'

import './Carousel.styl'

// const getRollSlides = (children, itemWidth) =>
// 	children.map((child, key) =>
// 		<div
// 			className="carousel__slide"
// 			key={key}
// 			style={{
// 				width: itemWidth
// 			}}
// 		>
// 			{child}
// 		</div>
// 	)

const Carousel = ({
  carouselId
  // rollerWidth,
  // children,
  // currentSlide,
  // itemWidth,
  // next,
  // prev,
  // position
}) => (
  <div id={carouselId} className="carousel">
		{/* <div className="carousel__roller" style={{
			// width: rollerWidth,
			// transform: `translateX(-${position}px)`
		}}>
			{getRollSlides(children, itemWidth)}
		</div> */}
		{/* <div className="carousel__arrows">
			<div
				onClick={prev} className={`carousel__arrow carousel__arrow--prev${currentSlide ? '' : ' carousel__arrow--disabled'}`}
			/>
			<div
				onClick={next}
				className={`carousel__arrow carousel__arrow--next${currentSlide < children.length - 1 ? '' : ' carousel__arrow--disabled'}`}
			/>
		</div> */}
	</div>
)

export default carouselContainer(Carousel)
