import Blog from '../../component/Blog/Blog'
import Tolulope from '../../assets/Tolulope-Aremu.jpg'
import Bobrisky from '../../assets/BOBRISKY.jpg'
import Waec from '../../assets/waec.jpeg'
import './Home.css'

const Home = () =>{
    return (
        <>
        <div className="content">
        <Blog image={Tolulope}title='Nigerian Engineer Awarded Honorary Doctorate By US Varsity,' 
        author='This_Day news papper' content='Prowess University, Delaware, USA, has conferred an Honorary Doctorate in Engineering on Tolulope Aremu, 
        recognising his outstanding contributions to the field of engineering and sustainable solutions.
        The award, a testament to Aremu’s lifelong dedication to technological advancements, 
        was presented in a ceremony that celebrated his leadership and innovation in the industry.' date='Tuesday, 22nd October,2024' style='card1'/>

        <Blog image={Bobrisky}title='Bobrisky transferred to FCID, spent night behind bars' 
        author='PUNCH' content='Controversial crossdresser, Okuneye Idris, otherwise known as Bobrisky, is currently in detention at the Force Criminal Investigation Department Annex, Alagbon, Lagos State, where he spent the night in a cell at the police facility.

A source, who confirmed the development to our correspondent, said further directives were being awaited regarding Okuneye’s case, adding that he was taken to the FCID for safekeeping following his arrest by officials of the Nigeria Immigration Service during his attempt to exit the country through the Seme border.

The source said, “Bobrisky was brought to the FCID, Alagbon, around 10 p.m. on Monday. Immigration arrested him at Seme Boarder and brought him for safekeeping.

“He is in detention at the FCID, Alagbon. He was arrested on Sunday, detained overnight, and taken to the FCID, Alagbon, around 10 pm on Monday. He is still at the FCID.”' date='Tuesday, 22nd October,2024' />
       <Blog image={Waec}title='Computer-based WASSCE starts Friday, WAEC says' 
        author='This_Day news papper' content='The West African Examinations Council (WAEC) says it will commence its Computer-Based West African Senior School Certificate Examination (CBWASSCE) for private candidates from October 25, 2024, 

The exercise is expected to last till December 20, 2024, the examination body said in a statement on Tuesday, October 22. 

“The examination will adopt the hybrid mode of delivering the examination, 
which implies that the objective or multiple-choice questions would be rendered onscreen
 and candidates would be required to give their responses on the screen,
while the essay and practical questions will be rendered on-screen, likewise, 
but candidates would have to give their responses using the answer booklets provided,” a WAEC spokesperson, Adesina Fadekemi, said. ' date='Tuesday, 22nd October,2024' style='card1'/>
        </div>
        </>
    )
}

export default Home


