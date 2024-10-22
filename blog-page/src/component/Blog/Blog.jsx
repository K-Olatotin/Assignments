import './Blog.css'

const Blog = (props)=>{
    return(
        <div>
        
            <div className={`blog ${props.style}`}>
                <img src={props.image} alt=''/>
                <p>Title:  {props.title}</p>
                <p>Author:  {props.author}</p>
                <p>Content:  {props.content}</p>
                <p>Date:  {props.date}</p>
            </div>
        </div>
    )
}

export default Blog