import './Card.css'

const Card = (props)=>{
    return(
        <div>
        
            <div className={`card ${props.style}`}>
            <img src={props.image} alt=''/>
                <p>Link: <a href={props.link}>link</a></p>
                <p>Name: {props.name}</p>
                <p>Price: {props.price}</p>
                <p>Description: {props.description}</p>
            </div>
        </div>
    )
}

export default Card