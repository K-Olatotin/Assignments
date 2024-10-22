import Card from '../../component/Card/Card'
import './Home.css'
import Americano from '../../assets/png/americano.jpeg'
import Cappuccino from '../../assets/png/cappuccino.jpeg'
import Cold from '../../assets/png/cold-brew.jpeg'
import Cortado from '../../assets/png/cortado.jpeg'
import Espresso from '../../assets/png/espresso.jpeg'
import Latte from '../../assets/png/latte.jpeg'
import Macchiato from '../../assets/png/macchiato.jpeg'
import Mocha1 from '../../assets/png/mocha1.jpeg'
import Plain from '../../assets/png/plain-black.jpeg'
const Home = () =>{
    return (
        <>
        <div className="content">
        <Card image={Americano}name='Americano' price='$4.00' description='Coffee' link='https://www.shutterstock.com/shutterstock/photos/2497850779/display_1500/stock-photo-cup-of-americano-coffee-on-a-saucer-on-a-white-background-for-breakfast-2497850779.jpg'/>
        <Card image={Cappuccino}name='Cappuccino' price='$5.00' description='Coffee'link='https://www.shutterstock.com/shutterstock/photos/2497850779/display_1500/stock-photo-cup-of-americano-coffee-on-a-saucer-on-a-white-background-for-breakfast-2497850779.jpg'/>
        <Card image={Cold}name='Cold-coffee' price='$4.50' description='Coffee' link='https://www.shutterstock.com/shutterstock/photos/2497850779/display_1500/stock-photo-cup-of-americano-coffee-on-a-saucer-on-a-white-background-for-breakfast-2497850779.jpg'/>
        <Card image={Cortado }name='Cortado' price='#5.00' description='Coffee' link='https://www.shutterstock.com/shutterstock/photos/2497850779/display_1500/stock-photo-cup-of-americano-coffee-on-a-saucer-on-a-white-background-for-breakfast-2497850779.jpg'/>
        <Card image={Espresso}name='Espresso' price='$4.30' description='Coffee' link='https://www.shutterstock.com/shutterstock/photos/2497850779/display_1500/stock-photo-cup-of-americano-coffee-on-a-saucer-on-a-white-background-for-breakfast-2497850779.jpg'/>
        <Card image={Latte}name='Latte' price='$6.00' description='Coffee' link='https://www.shutterstock.com/shutterstock/photos/2497850779/display_1500/stock-photo-cup-of-americano-coffee-on-a-saucer-on-a-white-background-for-breakfast-2497850779.jpg'/>
        <Card image={Macchiato}name='Macchiato' price='$4.75' description='Coffee' link='https://www.shutterstock.com/shutterstock/photos/2497850779/display_1500/stock-photo-cup-of-americano-coffee-on-a-saucer-on-a-white-background-for-breakfast-2497850779.jpg'/>
        <Card image={Mocha1}name='Mocha' price='$3.00' description='Coffee' link='https://www.shutterstock.com/shutterstock/photos/2497850779/display_1500/stock-photo-cup-of-americano-coffee-on-a-saucer-on-a-white-background-for-breakfast-2497850779.jpg'/>
        <Card image={Plain}name='Plain-coffee' price='$2.00' description='Coffee' link='https://www.shutterstock.com/shutterstock/photos/2497850779/display_1500/stock-photo-cup-of-americano-coffee-on-a-saucer-on-a-white-background-for-breakfast-2497850779.jpg'/>
        </div>
        </>
    )
}

export default Home