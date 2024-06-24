import './FaqComponent.css';

export function FaqComponent() {
    return (
        <div className='d-flex justify-content-center Faqcomponent'>
            <p className='faq'>Frequently asked Questions</p>
            <div class="accordion bg-black" id="accordionExample">
                <div class="accordion-item bg-black">



                        <button class="accordion-button accordion-h2 bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong> What is NETFLIX?</strong>
                        </button>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!                        </div>
                    </div>
                </div>
                <div class="accordion-item bg-black">
                        <button class="accordion-button collapsed accordion-h2 bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<strong>How much does it cost?</strong>                        </button>
                
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.                        </div>
                    </div>
                </div>
                <div class="accordion-item bg-black">
                        <button class="accordion-button collapsed accordion-h2 bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
<strong>How do i cancel?</strong>                        </button>
                    
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}