import Carousel from 'components/carousel'

const Home = () =>
  <div className="container-carousel">
		<Carousel>
			<div className="item">
        <img src="/assets/iq-vermelho.png" alt=""/>
        item 1
      </div>
			<div className="item">
        <img src="/assets/iq-verde.png" alt=""/>
        item 2
      </div>
			<div className="item">
        <img src="/assets/iq-azul.png" alt=""/>
        item 3
      </div>
		</Carousel>
	</div>

export default Home
