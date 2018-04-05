import { compose, lifecycle, withState, withHandlers, withProps } from 'recompose'

// const getPosition = (currentSlide, itemWidth) => currentSlide * itemWidth

const CarouselContainer = compose(
  // - 1 step
	// withState('carouselId', 'setMyCarouselId', `carousel-${Date.now()}`),
	// withState('itemWidth', 'setItemWidth', 0),
  // withState('rollerWidth', 'setRollerWidth'),
  // - 2 step
	// withState('currentSlide', 'setCurrentSlide', 0),
	withHandlers({
    // - 3 step
		// next: ({ children, currentSlide, setCurrentSlide }) => () => {
		// 	if (currentSlide < children.length - 1) {
		// 		setCurrentSlide(currentSlide + 1)
		// 	}
		// },
		// prev: ({ currentSlide, setCurrentSlide }) => () => {
		// 	// !== 0
		// 	if (currentSlide) {
		// 		setCurrentSlide(currentSlide - 1)
		// 	}
		// }
	}),
	lifecycle({
    // - 1 step
		// componentDidMount() {
		// 	const { carouselId, setItemWidth, children, setRollerWidth } = this.props
		// 	const { offsetWidth } = document.getElementById(carouselId)
		// 	setItemWidth(offsetWidth)
		// 	setRollerWidth(offsetWidth * children.length)
		// }
	})
  // - 4 step
	// withProps(({ currentSlide, itemWidth, ...props }) => ({
	// 	position: getPosition(currentSlide, itemWidth)
	// }))
)

export default CarouselContainer
