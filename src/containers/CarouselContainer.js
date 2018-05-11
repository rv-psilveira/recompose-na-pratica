import { compose, lifecycle, withState, withHandlers, withProps } from 'recompose'

const CarouselContainer = compose(
  // - step 1
	// withState('carouselId', 'setMyCarouselId', `carousel-${Date.now()}`),
	// withState('itemWidth', 'setItemWidth', 0),
  // withState('rollerWidth', 'setRollerWidth'),

  // - step 2
	// withState('currentSlide', 'setCurrentSlide', 0),
	withHandlers({
    // - step 2
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
    // - step 1
		// componentDidMount() {
		// 	const { carouselId, setItemWidth, children, setRollerWidth } = this.props
		// 	const { offsetWidth } = document.getElementById(carouselId)
		// 	setItemWidth(offsetWidth)
		// 	setRollerWidth(offsetWidth * children.length)
		// }
	})
  // - step 3
	// withProps(({ currentSlide, itemWidth }) => ({
	// 	position: currentSlide * itemWidth
	// }))
)

export default CarouselContainer
