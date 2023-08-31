import React from "react";

function HomePage() {
    
    // The function showDefinition will show the definition (dd) of a dt element
    // when the user's mouse is hovering over a dt element. 
    const showDefinition = (element) => {

        // Sets the css style of all dt elements to default;
        const dts = document.getElementsByTagName('dt');
        console.log(dts);
        for (let i = 0; i < dts.length; i++) {
            console.log(dts[i]);
            dts[i].style.display = 'inline';
            dts[i].style.backgroundColor = 'transparent';
        }

        // Restyles the current dt element
        element.style.display = 'block';
        element.style.backgroundColor = '#ffffff88';
        element.style.color = 'black';

        // Gets all of the dd elements.
        // Returns an HTML Collection dds.
        let dds = document.getElementsByTagName('dd');
        // Iterates the HTML Collection
        for (let i = 0; i < dds.length; i++) {
            // Sets the display of every dd element (i.e., dds[i]) to none.
            dds[i].style.display = 'none'; 
        }

        // Sets the definition element that we want to show to be block display.
       element.nextElementSibling.style.display = 'block';
        }

    const stopAnimation = (e) => {
        e.preventDefault();
        const elements = document.getElementsByClassName('animate');
        while (elements[0] !== undefined) {
            elements[0].classList.remove('animate');
        }
    }
    return (
        <>
            <div className="header" onClick={(e) => stopAnimation(e)}>
                <div className="welcome">
                    <div className="hey animate">Hey</div>
                    <div className="there animate">there</div>
                </div>
                {/*<div className="title">
                    <div className="title-inner">
                        <div className="cafe">
                            
                        </div>
                        <div className="mozart">
                            <div className="mozart-inner">THERE</div>
    </div>
                    </div>
                </div>*/}
            
                <div className="image animate">
                    <img className="background-image" src='/images/profile.jpg' alt=''/>
                    <p className="introduction">
                        Hi, my name Tongxin Sun. I am a Post-bacc computer science student from Oregon State University. <br/> This
                        is the website that I built in the course CS290: Web Development. It is a full-stack MERN application. I will 
                        continuously improve and maintain this website. Feel free to explore different pages of this website! <br/> 
                    </p>
                    
                        <p className="introduction">This website is built with the following technologies:</p>
                            <dl className="technologies">
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>HTTP</dt>
                                <dd>CSS stands for Cascading Style Sheets. It is used for styling the website to improve its usability, accessibility, readability and legibility.</dd>
                                <dt>URL</dt>
                                <dd>Placeholder</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>HTML</dt>
                                <dd>HTML stands for HyperText Markup Language. The current version of HTML is <a href="https://en.wikipedia.org/wiki/HTML5">HTML5</a> and 
                                the standard is available <a href="https://html.spec.whatwg.org/">here</a>. It is used for structuring the website.
                                </dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>CSS</dt>
                                <dd>CSS stands for Cascading Style Sheets. It is used for styling the website to improve its usability, accessibility, readability and legibility.</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>JavaScript</dt>
                                <dd>Initially named LiveScript, JavaScript is the programming language used for the web in order to create dynamic web applications.</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>Node</dt>
                                <dd>Node.js (written in JavaScript) is widely used for developing server-side applications.</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>Express</dt>
                                <dd>Express is one of the popular frameworks developed for building web applications using Node.js.</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>React</dt>
                                <dd><a href="https://react.dev/learn/start-a-new-react-project">React</a> is a framework for writing front-end applications. Applications built in React are based on different components, which are reusable units of UI.</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>React Icons</dt>
                                <dd>React Icons is a library containing hundreds of <a href="https://react-icons.github.io/react-icons/">icons</a> as React components.</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>MongoDB</dt>
                                <dd>MongoDB is a document-oriented database management system that helps to manage the database of a website.</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>Mongoose</dt>
                                <dd><a href="https://www.npmjs.com/package/mongoose">Mongoose</a> is a JavaScript library that provides a syntactic layer between the data in a database's collection of 
                                    documents and the objects in a Node app. It is used to interact with MongoDB.</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>REST API</dt>
                                <dd><a href="https://www.restapitutorial.com/lessons/httpmethods.html">REST</a> stands for Representational State Transfer. It is a guideline for implementing web services.</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>Image Optimization</dt>
                                <dd>Optimized images for online viewing can reduce the time for a browser to display an image file in its correct size.</dd>
                                <dt onClick={(e) => {showDefinition(e.target)}}>Google Fonts</dt>
                                <dd><a href="https://fonts.google.com/">Google Fonts</a> is a web font service that provides us with free and open-source font families to use on a website.</dd>
                            </dl> 
                    
                </div>
                
            </div>
            {/*<h2><i><AiFillHome/></i>WELCOME!</h2>
            <p>This is my website portfolio. Feel free to explore!</p>
            <article>
                <p>
                    This website is built using the following web development technologies:
                    <dl>
                        <dt>HTML</dt>
                        <dd>HTML stands for HyperText Markup Language. The current version of HTML is <a href="https://en.wikipedia.org/wiki/HTML5">HTML5</a> and 
                        the standard is available <a href="https://html.spec.whatwg.org/">here</a>. It is used for structuring the website.
                        </dd>
                        <dt>CSS</dt>
                        <dd>CSS stands for Cascading Style Sheets. It is used for styling the website to improve its usability, accessibility, readability and legibility.</dd>
                        <dt>JavaScript</dt>
                        <dd>Initially named LiveScript, JavaScript is the programming language used for the web in order to create dynamic web applications.</dd>
                        <dt>Node</dt>
                        <dd>Node.js (written in JavaScript) is widely used for developing server-side applications.</dd>
                        <dt>Express</dt>
                        <dd>Express is one of the popular frameworks developed for building web applications using Node.js.</dd>
                        <dt>React</dt>
                        <dd><a href="https://react.dev/learn/start-a-new-react-project">React</a> is a framework for writing front-end applications. Applications built in React are based on different components, which are reusable units of UI.</dd>
                        <dt>React Icons</dt>
                        <dd>React Icons is a library containing hundreds of <a href="https://react-icons.github.io/react-icons/">icons</a> as React components.</dd>
                        <dt>MongoDB</dt>
                        <dd>MongoDB is a document-oriented database management system that helps to manage the database of a website.</dd>
                        <dt>Mongoose</dt>
                        <dd><a href="https://www.npmjs.com/package/mongoose">Mongoose</a> is a JavaScript library that provides a syntactic layer between the data in a database's collection of 
                            documents and the objects in a Node app. It is used to interact with MongoDB.</dd>
                        <dt>REST API</dt>
                        <dd><a href="https://www.restapitutorial.com/lessons/httpmethods.html">REST</a> stands for Representational State Transfer. It is a guideline for implementing web services.</dd>
                        <dt>Image Optimization</dt>
                        <dd>Optimized images for online viewing can reduce the time for a browser to display an image file in its correct size.</dd>
                        <dt>Google Fonts</dt>
                        <dd><a href="https://fonts.google.com/">Google Fonts</a> is a web font service that provides us with free and open-source font families to use on a website.</dd>
                    </dl> 
                </p>
    </article>*/}
    <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
  </div >
        </>);}

export default HomePage;
