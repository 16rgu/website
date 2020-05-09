var myCat = {
    "name" : "Meowsalot",
    "species" : "cat",
    "favFood" : "tuna"
}

var ulist = document.getElementById("ulist").getElementsByTagName("li");
var pText = document.getElementById("text");
var heading = document.getElementById("body");
var home = document.getElementById("home");
var about = document.getElementById("about");
var port = document.getElementById("port");

home.addEventListener("click", switchHome);
about.addEventListener("click", switchAbout);
port.addEventListener("click", switchPort);



function switchTemp(){
    heading.innerHTML = 
        `<h1></h1> 
        <p> </p>`;
}

function switchHome(){
    heading.innerHTML = 
        `<h1>Raymond Gu</h1> 
        <p> My name is Raymond Gu. 
        I am a second semester senior pursuing a 
        degree in Computer Science at Cornell University. </p>`;
}

function switchAbout(){
    heading.innerHTML = 
        `<h1>About Me</h1> 
        
        <figure> 
                <figcaption id = "phcap"> 
                This is where I will put a picture of myself once I get 
                my hands on one 
                </figcaption>
        </figure> 

        <p> 
            My name is Raymond Gu. 
            I am a second semester senior pursuing a 
            degree in Computer Science at Cornell University. 
        </p>
        <p>
            Although I am completing my degree in Computer Science,
            I plan on pursuing medicine post graduation. Through various
            opportunites during my academic career, I was able to different
            fields and ultimately determined that medicine would be the most
            fulfilling to me as a person.
        </p>
        <p>
            Outside of school, my other interests include playing video games,
            thinking about game design and theory, playing piano, and studying 
            Japanese language and culture.
        </p>
        <p>
            My current goals are to learn HTML, CSS, and Javascript for web development
            purposes. I plan on doing this by consistently improving and developing 
            the design of this website. Along side that, I intend to continue my study
            of the Japanese language. This mostly entails reading novels in Japanese. 
        </p>`
            ;
}

function switchPort(){
    heading.innerHTML = 
        `<h1>Portfolio</h1> 
        <h3> Xi Compiler</h3>
        <h4> CS 4120: Introduction to Compilers - Final Project</h4>
        <p> 
            In this course, me and two other students were asked to design
            a compiler as a team from scratch in a language of our choice.
            The compiler had to be able to compile code for a fictional 
            C-like language, Xi. The formal specifications for the languange
            were provided to us by the course staff. The project was split 
            into 6 different parts. In each part, we were asked to implement
            a step in the compiler, using the material we had learned in class.
            We chose to implement our compiler in OCaml. The code can be found
            <a href="#"> here (soon)</a>.
        </p>
        <h3> Design Your Own System <h3>
        <h4> CS 3110: Data Structures and Functional Programming - Final Project</h4>
        
        <figure>
        <figcaption>
        This is where a screenshot of the final product will be
        </figcaption>
        </figure>
        
        <p>
            For this project, we were asked to build a system of our choice
            in a group, over the course of the semester. Our group decided to
            do a remake of an old Gameboy Advance game, titled 
            <a href="https://en.wikipedia.org/wiki/Fire_Emblem_(video_game)"> 
                <i>Fire Emblem</i> 
            </a>.
            The result is a fully functional game with custom maps, built from
            scratch in OCaml. While we were able to implement many of the core
            mechanics of the game (combat, trading, inventory management etc.),
            due to the time restrictions, we were unable to implement our reach
            goals (unique skills for each character, fluid animations).
            <br>
            The code can be found <a href="#"> here (soon)</a>.
        </p>
        `;
}


function bfunc(){
    console.log("hello");
}

var mainText = document.getElementById("body");

function renderHTML(data){
    
}