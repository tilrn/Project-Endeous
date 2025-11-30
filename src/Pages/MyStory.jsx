import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import "./MyStory.css";

const MyStory = () => { 
    return (
        <>
            <NavigationBar />
            <div className="container">
                <div className="wrapper">
                    <section className="main">
                        <img 
                            src="/img/mystory.png" 
                            className="circle" 
                            alt="Profile"
                        />
                        <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

const text = "Honestly this my remedy, from world's uncertanty, ever lasting\nchange, things so precious flying by unnoticed.Deep down\nparts of me's so scared I could cry for a while. Idealizing,\ndreaming and obssession have always been the finest\ncopium. Meaning, something bigger than us, perhaps\neven life iself. A feeling so profound, yet unpredictable\nin it's all overwhelmingness, beautiful, ecstatic, I\ncould never truly describe, still it drives me to\npursue it all.\n\n\nAt my lowest point, I came across an artist who's songs\nhit different, right in the softest, most broken part of mine.\nFor the first time in a very long time, I've felt warmth. That\nit's okay. I'm not alone in this and not only that, I was\nsomehow understood.\n\nIt really helped me get trough hardships life has to offer. In all honesty\nI don't think you'd be reading this now. Not because I wouldn't be here, but\nbecause that day I was inspired by that singular person, person just like us.\nA voice for those who don't have a voice.\n\nTo tell you all little starts have a reason.\n\n\nWhat if you are not your next thought?";


export default MyStory;