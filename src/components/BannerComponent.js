import image1 from '../Images/photo1.jpg';
import image2 from '../Images/photo2.jpg';
import image3 from '../Images/photo3.jpg';
import './BannerComponent.css'

export default function BannerComponent() {
    return (
        <div className="Banner-component bg-black">
            
            <div className='d-flex align-items-center Banner mt-5'>
                <img src={image1}  className="Banner-img" alt='img1'></img>
                <div className='description'>

                <h2>The legends of Hanuman</h2>
                <p>When the power-hungry Ravan tore through the world to unleash evil, in his
                     way stood a humble vaanar awoken to his divinity to become an immortal legend. </p>
                </div>

            </div>
            <div className='breaker'></div>
            <div className='d-flex Banner align-items-center mt-5'>
            <div className='description'> 

                 <h2>Intelligent</h2>
                 <p>A successful software engineer becomes a vigilante following the demise 
                    of his mentor in a bid to seek revenge against those responsible for the latter's death.</p>
                 </div>

                <img src={image2} className="Banner-img" alt='img2'></img>
            </div>
            <div className='breaker'></div>

            <div className='d-flex Banner align-items-center mt-5'>
                <img src={image3} className="Banner-img" alt='img3'></img>
                <div className='description'>

                <h2>Vakeel Saab</h2>
                <p>After being molested by Vamsi, a politician's son, Pallavi, along with her
                     friends, is unable to lodge a complaint against him. However, an alcoholic lawyer, 
                     Satyadev, comes to their rescue.</p>
                </div>


            </div>
            <div className='breaker'></div>

        </div>
    )
}