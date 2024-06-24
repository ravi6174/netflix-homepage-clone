import './FooterComponent.css';

export function FooterComponent(){
    return(
        <>
        <div className='breaker'></div>

        <div className='d-flex links mt-5 footer-div'>
            <div className='list1 list'>
                <a href=''>Pricing Plans</a>
                <a href=''>Latest Movies</a>
                <a href=''>Collections</a>

            </div>
            <div className='list'> 
            <a href=''>Privacy Policy</a>
            <a href=''>Terms& conditions</a>
            <a href=''>User agreement</a>
            <a href=''>More info</a>

            </div>
            <div className='list3 list'>
            <a href=''>sitemap</a>
            <a href=''>contact us</a>
            <a href=''>address</a>

            </div>
        </div>
        </>
    )
}