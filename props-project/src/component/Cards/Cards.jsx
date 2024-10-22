import './Cards.css'

const Cards = (props)=>{
    return(
        <div>
        
            <div className={`cards ${props.style}`}>
                <img src={props.image} alt='' />
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Location: {props.location}</p>
            </div>
        </div>
    )
}

export default Cards