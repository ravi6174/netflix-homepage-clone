import HeaderComponent from './HeaderComponent';
import { CenterComponent } from './CenterComponent';
import { SignUpComponent } from './SignUpComponent';
import BannerComponent from './BannerComponent';
import { FaqComponent } from './FaqComponent';
import { FooterComponent } from './FooterComponent';

export default function MainComponent() {
    return (
        <div className='bg-black'>
        <div id='main-div'>
            <div id='shade'>
                <HeaderComponent />
                <CenterComponent/>
                <SignUpComponent/>
            </div>
        </div>
        <div className='bg-black'>
            <BannerComponent/>
            <FaqComponent/>
            <SignUpComponent/>
            <FooterComponent/>
        </div>
        </div>    )
}