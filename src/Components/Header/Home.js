import { Link } from "react-router-dom";

const Home = () => {

    return (
			<div>
				<h1> Welcome to Holidays Worldwide </h1>
				<h2>Where all the world holidays can be found in 1 click!</h2>

				<button className='learnmore__button' type='submit'>
					<Link to="/learn-more">
						<h2>LEARN MORE</h2>
					</Link>
				</button>
			</div>
		);
}

export default Home;