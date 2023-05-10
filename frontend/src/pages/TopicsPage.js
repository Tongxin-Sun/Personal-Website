import React from "react";
import {FaBookOpen} from 'react-icons/fa';

function TopicsPage() {
    return (
        <>
            <h2><FaBookOpen/>WEB DEVELOPMENT CONCEPTS</h2>
            <nav className="localnav">
                <a href="#webserver">About Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#css">Images and CSS</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>
                <a href="#DOM">DOM</a>
            </nav>
            <article id="webserver">
                <h3>About Web Servers</h3>
                <p>
                    The name 'index' is the default name for a 'home' page of a website hosted on an Apache web server, 
                    which is what OSU's Engineering Server is using.
                    
                    Below are the steps that I followed to create this page: 
                    Create folders as needed to store the index page. In my case, this folder is called 'a1-sunto' as specified by the instruction.
                    Open the VS Code and found this folder. 
                    Click the 'New File' button to create a new HTML file called 'index.html' inside 'a1-sunto'. 
                    Open the 'index.html' file and begin editing.
                    Press the keystroke 'Ctrl+i' and select 'HTML Sample' option from the popup.
                    Change the text inside the title tag to my full name. 
                    Add two headings for documenting my full name and the assignment number. 
                    Add paragraph tags and inside them wrote my answers to the assignment.
                </p>
                <p>
                    In my browser's Web Dev/Inspector tools, I can see three-page names. 
                    The first one is called 'index.html' with a status of 200. This is the
                    status code, and it basically means that the request was successful. The
                    second-page name is 'main.css' and the third-page name is 'main.js'. They
                    both have a status of 'failed', which indicates that the request was not
                    successful. This is because I don't have these two files for now.  
                </p>
                <p>
                    The file name has changed. On the local computer, it is 'index.html', but 
                    on the web server it is 'a1-sunto/' which is the folder name + '/'. As it is explained in
                    the exploration, as a convention, most web servers are configured so that the request for '/' 
                    is mapped to the file at the path '/index.html'. So 'a1-sunto/' is basically 'a1-sunto/index.html'.
                    
            
                    The statuses for 'main.css' and 'main.js' have changed to 404, which is Not Found. On the 
                    local computer, the status is '(failed) net::ERR_FILE_NOT_FOUND'.
            
                    There is one additional file called 'favicon.ico' whereas, on the local computer, there isn't such a file.
            
            
                    The Response Headers for 'index.html' are quite simple on the original local computer 
                    for the 'index.html' file.
                    It only contains two headers, whose names are Content-Type and Last-Modified, respectively.
                    However, the new Response Headers on the web server have much more headers. Besides Content-type,
                    and Last-modified, it also has Accept-Ranges, Connection, Content-Encoding, Content-Length, 
                    Date, ETag, Keep-Alive, Server, and Vary.
            
            
                    The Request Headers for the 'index.html' on the local computer are far fewer than the ones 
                    on the server. 
                    It only has header names sec-ch-ua, sec-ch-ua-mobile and sec-ch-ua-platform, but the Request Headers on the 
                    server side also include Accept, Accept-Encoding, Accept-Language, Cache-Control, Connection, Cookie, Host, 
                    Pragma, and many more.
            
            
                    For 'main.css' and 'main.js', they now have several Response Headers, whereas, on the local computer, they don't.
                    They also have more Request Headers. 
                </p>
                <p>
                    The 'favicon.ico' file does have status 200 because we do have this file. The OSU server has it by default
                    in its main root. However, both 'main.css' and 'main.js' don't have status 200 because we do not have such 
                    files in the folder.
                </p>
                <p> 
                    The URL is https://web.engr.oregonstate.edu/~sunto/a1-sunto/. The value of the schema is 'https'. The subdomain is 'web.engr' and 
                     the host domain is 'oregonstate.edu'. The resource is '/~sunto/a1-sunto/'.
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p><strong>Frontend design</strong> is the design and creation of the kind of website experience for users to see and interact with. 
                    The frontend design is composed of the graphical user interface design and interactive design. These are mostly accomplished 
                    by using languages like HTML, CSS and JavaScript. Graphical design is the visual aspect of the experience, i.e., 
                    how the website looks. It includes a variety of design principles and is related to color schemes, font and typography, 
                    and so on. On the other hand, interactive design is the design of different ways that the user interacts with the website. 
                    Generally speaking, frontend design is the process of creating a good website or app experience so that users can achieve their 
                    goals in the best way.
                </p>
                <p>Below are the five "E"s of usability and their descriptions: </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>The website can help users to achieve their goals. For example, if a user wants to shop for sofas on the website, he/she can successfully find a list of sofas. If a user wants to book a service, he/she can successfully book it. 
                    </dd>
                    <dt>Efficient</dt>
                    <dd>Users can complete their goals in simple steps. The website saves users' time. Users can complete their tasks with high speed.</dd>
                    <dt>Easy to navigate</dt>
                    <dd>When using the website, even new users can easily locate the relevant sections. The structure of the website is clear and intuitive. One can quickly find out where one should go or click to achieve his/her goal.</dd>
                    <dt>Error-free</dt>
                    <dd>When the user is using the website, he/she will not run into errors frequently. If an error does occur, the user can easily fix it. For example, if we have buttons on the website but don't add explanatory texts to them, the user may click the wrong button many times.</dd>
                    <dt>Enjoyable to use, or engaging</dt>
                    <dd>The user is enjoying using the website and is likely to use it again. They are satisfied with the experience of using the website, and they find that using the website is fulfilling. If a user finds the website to be enjoyable or engaging, he/she will likely come back again.</dd>
                </dl>
                <p><strong>Page layout tags</strong> are used to build the general structure of a webpage. Normally, different elements are displayed by the browser with a newline before and after it, making each element be seen as an individual block on its own. They not only help render the page clear and visually organized to the general user but also help machines such as search engine robots and screen readers understand different areas of the page. Examples of page layout tags include the header, nav, main, section, article, aside, and footer.</p>
                <p>
                    <strong>Anchors</strong> are used to creating links from one section to another or from one page to another. 
                    When using the anchor element, we should have an opening tag &lt;a&gt; and a closing tag &lt;&sol;a&gt;. 
                    We put the link as the value of the href attribute. Between the opening tag and the closing tag, we put 
                    the descriptive text for this link. Clicking this text will lead us to the specific section or page that 
                    it links to. We can use anchors for website navigation or for referring to external resources. For 
                    navigation on the same page, we use the id attribute. First, we add an id attribute to the element that 
                    we want to link to. Then, we put the value of the id attribute preceded by # 
                    as the value of the href attribute. It is very similar when we want 
                    to add links from one page to another, except that the value we give to the href attribute is the page's URL. 
                    We can provide both absolute and relative URLs. The absolute URL is simple. It is just the full path to the 
                    file page. However, when using relative URLs, if the page that we want to link to is in the same directory as the current page, then simply 
                    putting the file name or adding './' to the front of a file name will do. If the linked page is in the child 
                    directory of the current directory, we need to move down to the specific directory where the page resides using '/'. 
                    On the other hand, if the linked page 
                    is one or more steps up the current directory, we can use '..' to move up one directory to the directory 
                    where we can find the targeted page. We can make good use of anchors 
                    to create clear navigation of websites and to link to external resources.
                </p>
            </article>
            <article id="css">
                <h3>Images and CSS</h3>
                <p>The 6 major <strong>specifications</strong> of images for the web are descriptive file name, small file size, exact dimensions, correct file format, reduced resolution, and color mode. .JPG is the most appropriate for photos and .GIF (and sometimes 8-bit) .PNG is the most appropriate for line art. </p>
                <p>The main reasons to incorporate stylesheets in websites and apps are to separate style from structure. We can redefine how the structure, content, and components that HTML and JavaScript build should look and behave to improve usability, readability, and legibility, and adhere to brand requirements.
                    The 5 ways to incorporate styles are linking to or importing an external CSS stylesheet, embedding within a &lt;style&gt;&lt;/style&gt; tag in the area, adding inline within an element using an attribute and value, using JavaScript template literals within a JavaScript function, and in incorporating in the regular JavaScript.  
                </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>The 6 major goals of designing accessible forms are to provide clear instructions above the form and in the labels 
                    so that the user knows what the form is about and how to fill the form, to let the users know why you're gathering 
                    the data and which fields are required so to protect the user's security, to set the first field to autofocus so users 
                    can start typing without using the keyboard, to ensure each form control can be filled in using the keyboard so users 
                    who cannot/don't use a mouse or trackpad can fill in the form, to add tab indexing to complex forms so the users know 
                    in which order they should fill in the form, and to ensure validation messages are screen readable because the built-in 
                    HTML browser message is not screen-readable and couldn't be seen by those relying on a screen reader. 
                </p>
                <p>
                    The major tags for forms include the &lt;form&gt;&lt;&sol;form&gt; tag: to incorporate everything in the form. Its action 
                    attribute  specifies where the request from the form should be sent, and the method attribute specifies the HTTP method to be 
                    used in the HTTP request sent when the form is submitted. The &lt;fieldset&gt;&lt;&sol;fieldset&gt; tag: to group the form 
                    into different sections. The &lt;legend&gt;&lt;&sol;legend&gt; tag: to give each &lt;fieldset&gt; a title or instruction. The &lt;
                    label&gt;&lt;&sol;label&gt; tag: to help the user (especially those who rely on a screen reader) understand the purpose 
                    of each data entry. The 'for' attribute is matched up with the form control's id attribute so that the user knows which data 
                    entry this label refers to. The &lt;input&gt;&lt;&sol;input&gt; tag: to get user data from the form. The type attribute 
                    specifies what type of data the user should input, and there are 22 types available. The name attribute specifies the data's 
                    name so that when the form is submitted and received by the server side, it knows which part of the form each data item is 
                    associated with. The &lt;select&gt;&lt;&sol;select&gt; and the &lt;option&gt;&lt;&sol;option&gt; tags: provide a drop-down 
                    list of choices. The name attribute specifies the data's name for the server and the value attribute in the &lt;option&gt;&lt;
                    &sol;option&gt; tag will be sent in the request as the value for the name attribute. The &lt;textarea&gt;&lt;&sol;textarea&gt; 
                    tag: to let the user input multiple lines of text. The &lt;button&gt;&lt;&sol;button&gt; tag: to perform the action attribute 
                    specified by the &lt;form&gt;&lt;&sol;form&gt; tag.
                </p>
                <p>
                    To improve usability, the height, and width of input, select, and button need to be about the size of the tip of a finger.
                    Each group of labels and inputs should be visually separated to reduce confusion. Some major form styles we should follow 
                    to change the color, type, and width of and to add margin and padding to the &lt;fieldset&gt;&lt;&sol;fieldset&gt; border, 
                    to change the &lt;legend&gt;&lt;&sol;legend&gt; tag's style, and to set the display of the &lt;label&gt;&lt;&sol;label&gt; 
                    tag to block, etc.
                </p>
            </article>
            <article id="express">
                <h3>Express</h3>
                <p>According to Tutorials Point's definition: 
                    "Node.js is an open source and cross-platform runtime environment for developing server-side 
                    and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, 
                    Microsoft Windows, and Linux. Node.js also provides a rich library of various JavaScript modules, which simplifies the development 
                    of web applications using Node.js to a great extent." npm is a package manager for Node. We use npm to install and manage the large 
                    number of packages of Node.js. Express.js, which is also simply referred to as Express, is a popular framework developed for building 
                    web applications using Node.js. It provides Application Programming Interfaces of various common tasks that web applications need 
                    to do.</p>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                <p>The main data types of JavaScript are the five primitive types: number, 
                    boolean value (true or false), string, symbol, special values (undefined and null), 
                    plus one non-primitive type, i.e., object.</p>
                <p>
                    In JavaScript, an object is comprised of a set of name(or property)-value pairs. 
                    The actions we can perform toward properties of an object are called CRUD (i.e., 
                    create (or add), read, update and delete. We use the . operator to create and update. 
                    We use the . or the [] operators to read, and we use the delete operator to delete. 
                    We can also use the Object.keys() method to get the names of all properties of an object. 
                    For arrays, we can access the elements of an array using a 0-based integer index in 
                    square bracket, or we can use the string based property name. We can put any data types 
                    (including the object data type) into the array. If there's no element at a certain index, 
                    then the value undefined will be returned. The property length will return the number of 
                    elements in an array. The method push() will add one or more elements at the end of the array, 
                    and the method pop() will remove and return the last element in the array. The method includes() 
                    will tell if a value is in an array. The two primary methods for using JSON in JavaScript are 
                    the JSON.stringify() and the JSON.parse(). The former is used for creating a JSON string from a 
                    JavaScript object and the later is used for creating a JavaScript object from a JSON string. </p>
                <p>In JavaScript, there are two conditionals: if and switch statements. The if statement is very 
                    similar to the if statement in most other programming languages. The switch statement is used to 
                    compare the same variable to different values just like what the if-then-else statement does. The 
                    loops are written by either a while statement, a do while statement or a for statement. Just like 
                    the while statement, the do while statement executes while a condition is met. However, the do while 
                    statement will execute the body before the expression is evaluated. Therefore, the body will be 
                    executed at least once. There are three for loops. The basic for loop is like what other programming 
                    languages. The for of loop is used to iterate over iterable values, such as a string or an array. 
                    Finally, the for in loop is used to iterate over the properties of an object.  
                </p>    
                <p>
                    Object-oriented programming is the programming model/paradigm that emphasizes the creation and organization 
                    of objects. Every object that we create should have an identity, state and behavior. In JavaScript, every object 
                    has a unique identity. So two objects will not be equal to each other, even if they have the same value or property. 
                    Each object has its own state (property). The behavior of an object can be added by adding properties whose values 
                    are functions.
                </p>
                <p>
                    Functional programming means that functions in JavaScript are "first-class" values. Therefore, we can assign functions to 
                    variables, define functions that receive other functions as arguments and define functions that return functions.
                </p>
            </article>
            <article id="DOM">
                <p>Developers use JavaScript and Express to update the DOM of a page because modern web applications incorporate 
                    a lot of interactivity. The application needs to react differently to different user actions. By using JavaScript 
                    to manipulate the DOM, developers can define what reactions the web applications should take based on different 
                    user events/actions. We can add additional functionality to our server program using Express. Thus, we can add 
                    interactivity and functionality to both the client-side and server-side programming by 
                    JavaScript and Express.
                </p>
            </article>
        </>);}

export default TopicsPage;