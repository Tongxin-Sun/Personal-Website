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
       element.nextElementSibling.style.animation = 'text-clip 2s';
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
                                <dd>
                                    <span style={{fontWeight: "bold"}}>HTTP</span> (<span style={{fontWeight: "bold"}}>H</span>yper
                                    <span style={{fontWeight: "bold"}}>T</span>ext<span style={{fontWeight: "bold"}}>T</span>ransfer 
                                    <span style={{fontWeight: "bold"}}>P</span>rotocal) is a protocol that describes how to exchange 
                                    messages. Specifically, it is a protocol that describes the details of how:{<br/>}
                                    <ul>
                                        <li>A program called the client can send a request (e.g., to retrieve a document) to</li>
                                        <li>Another program called the server which sends back a response (e.g., containing the requested document) 
                                            back to the client.
                                        </li>
                                    </ul>
                                </dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>URL</dt>
                                <dd>
                                    <span style={{fontWeight: "bold"}}>URL</span> (<span style={{fontWeight: "bold"}}>U</span>niform 
                                    <span style={{fontWeight: "bold"}}>R</span>esource <span style={{fontWeight: "bold"}}>L</span>ocator) 
                                    is a naming infrastructure to represent documents, or more formally resources, located on the web. We 
                                    commonly call a URL a web address. {<br/>}
                                    <ul>
                                        <li>To request a document, a client uses the document's URL to send an HTTP request to that server 
                                            that hosts the requested document.</li>
                                        <li>Typically the client and server programs run on different machines. In such cases, the URL identifies 
                                            both the machine on which the server is running as well as the specific document among all the 
                                            other documents hosted by that server. The URL naming infrastructure thus allows retrieval of 
                                            documents that are located across geographically distant places, i.e., across a wide area. 
                                        </li>
                                    </ul>
                                </dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>HTML</dt>
                                <dd>
                                    <span style={{fontWeight: "bold"}}>HTML</span> (<span style={{fontWeight: "bold"}}>H</span>yper
                                    <span style={{fontWeight: "bold"}}>T</span>ext <span style={{fontWeight: "bold"}}>M</span>arkup <span style={{fontWeight: "bold"}}>L</span>
                                    anguage) is a markup language for describing documents that can be retrieved over the web. 
                                    <ul>
                                        <li>The term hypertext means text which contains links to other texts.</li>
                                        <li>HTML supports describing hypermedia documents, i.e., documents that besides text, can also contain 
                                            other media such as graphics, video, and sound.
                                        </li>   
                                        <li>A client interprets the HTML in a document it receives in the HTTP response from the server and displays the document.</li> 
                                    </ul>
                                    The current version of HTML is <a href="https://en.wikipedia.org/wiki/HTML5">HTML5</a> and 
                                    the standard is available <a href="https://html.spec.whatwg.org/">here</a>.
                                </dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>CSS</dt>
                                <dd>CSS stands for Cascading Style Sheets. It is used for styling the website to improve its usability, accessibility, readability and legibility.</dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>JavaScript</dt>
                                <dd>Initially named LiveScript, JavaScript is the programming language used for the web in order to create dynamic web applications.</dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>Node</dt>
                                <dd>Node.js (written in JavaScript) is widely used for developing server-side applications.</dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>Express</dt>
                                <dd>Express is one of the popular frameworks developed for building web applications using Node.js.</dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>React</dt>
                                <dd><a href="https://react.dev/learn/start-a-new-react-project">React</a> is a framework for writing front-end applications. Applications built in React are based on different components, which are reusable units of UI.</dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>React Icons</dt>
                                <dd>React Icons is a library containing hundreds of <a href="https://react-icons.github.io/react-icons/">icons</a> as React components.</dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>MongoDB</dt>
                                <dd>MongoDB is a document-oriented database management system that helps to manage the database of a website.</dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>Mongoose</dt>
                                <dd><a href="https://www.npmjs.com/package/mongoose">Mongoose</a> is a JavaScript library that provides a syntactic layer between the data in a database's collection of 
                                    documents and the objects in a Node app. It is used to interact with MongoDB.</dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>REST API</dt>
                                <dd><a href="https://www.restapitutorial.com/lessons/httpmethods.html">REST</a> stands for Representational State Transfer. It is a guideline for implementing web services.</dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>Image Optimization</dt>
                                <dd>Optimized images for online viewing can reduce the time for a browser to display an image file in its correct size.</dd>
                                <dt title='Click to show the description!' onClick={(e) => {showDefinition(e.target)}}>Google Fonts</dt>
                                <dd><a href="https://fonts.google.com/">Google Fonts</a> is a web font service that provides us with free and open-source font families to use on a website.</dd>
                            </dl> 

                            <p className="credits">*All the technology descriptions above are credited to the CS 290 course module from Oregon State University.</p>
                    
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
