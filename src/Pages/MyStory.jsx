import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import "./MyStory.css";

const MyStory = () => { 
    return (
        <>
            <NavigationBar />
            <div className="container">
                <div className="wrapper">
                    <section className="main">
                        <img 
                            src="https://picsum.photos/id/200/800/800" 
                            className="circle" 
                            alt="Profile"
                        />
                        <p>{text}</p>
                    </section>
                </div>
            </div>
        </>
    );
};

const text = "Crazy? I was crazy once. They locked me in a room, a rubber room, a rubber room with rats and rats make me crazy. Crazy? I was crazy once. They locked me in a room, a rubber room, a rubber room with rats and rats make me crazy. Crazy? I was crazy once. They locked me in a room, a rubber room, a rubber room with rats and rats make me crazy. Crazy? I was crazy once. They locked me in a room, a rubber room, a rubber room with rats and rats make me crazy. Crazy? I was crazy once. They locked me in a room, a rubber room, a rubber room with rats and rats make me crazy. Crazy? I was crazy once. They locked me in a room, a rubber room, a rubber room with rats and rats make me crazy. Crazy? I was crazy once. They locked me in a room, a rubber room, a rubber room with rats and rats make me crazy. Crazy? I was crazy once. They locked me in a room, a rubber room, a rubber room with rats and rats make me crazy.";

export default MyStory;