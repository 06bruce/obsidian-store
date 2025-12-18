import Hero from '../components/ui/Hero';
import ProductShowcase from '../components/ui/ProductShowcase';
import Snowfall from 'react-snowfall'

const Home = () => {
    return (
        <>
            <Snowfall color="#ffffff" snowflakeCount={200} />
            <Hero />
            <ProductShowcase />
        </>
    );
};

export default Home;
