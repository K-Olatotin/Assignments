import Cards from '../../component/Cards/Cards'
import './Home.css'
import Image1 from '../../assets/png/ojugo.jpg'
import Image2 from '../../assets/png/ojugo2.jpg'
import Image3 from '../../assets/png/me.jpg'
const Home = () =>{
    return (
        <>
        <div className="content">
        <Cards image={Image1}name='Awojobi' age='23' location='Ikorodu' style='card1'/>
        <Cards image={Image2}name='Muibat' age='55' location='Odongunyan' style='card2'/>
        <Cards image={Image3}name='Olatoyin' age='33' location='Ebute' style='card3'/>
        </div>
        </>
    )
}

export default Home