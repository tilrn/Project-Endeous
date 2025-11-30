import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import "./MyStory.css";

const MyStory = () => { 
    return (
        <>
            <Helmet>
                <title>My Story | Project Endeous - The Journey Behind the Art</title>
                <meta name="description" content="Discover the personal journey behind Project Endeous. A heartfelt story about finding meaning through art, overcoming hardships, and how music and creativity became a source of healing and inspiration." />
                <meta name="keywords" content="my story, artist journey, Project Endeous story, inspiration, healing through art, personal journey, creative story" />
                <link rel="canonical" href="https://projectendeous.com/mystory" />
                <meta property="og:title" content="My Story | Project Endeous - The Journey Behind the Art" />
                <meta property="og:description" content="Discover the personal journey behind Project Endeous. A heartfelt story about finding meaning through art and overcoming hardships." />
                <meta property="og:url" content="https://projectendeous.com/mystory" />
                <meta property="og:type" content="article" />
            </Helmet>
            <NavigationBar />
            <main className="container">
                <div className="wrapper">
                    <article className="main">
                        <img 
                            src="/img/mystory.png" 
                            className="circle" 
                            alt="Project Endeous artist profile"
                        />
                        <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
};

const text = "Honestly this my remedy, from world's uncertanty, ever lasting change, things so precious flying by unnoticed. Deep down parts of me's so scared I could cry for a while. Idealizing, dreaming and obssession have always been the finest copium. Meaning, something bigger than us, perhaps even life iself. A feeling so profound, yet unpredictable in it's all overwhelmingness, beautiful, ecstatic, I could never truly describe, still it drives me to pursue it all.\n\nAt my lowest point, I came across an artist who's songs hit different, right in the softest, most broken part of mine. For the first time in a very long time, I've felt warmth. That it's okay. I'm not alone in this and not only that, I was somehow understood.\n\nIt really helped me get trough hardships life has to offer. In all honesty I don't think you'd be reading this now. Not because I wouldn't be here, but because that day I was inspired by that singular person, person just like us. A voice for those who don't have a voice.\n\nTo tell you all little starts have a reason.\n\nWhat if you are not your next thought?";


export default MyStory;
