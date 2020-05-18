
var ulist = document.getElementById("ulist").getElementsByTagName("li");
var pText = document.getElementById("text");
var heading = document.getElementById("body");
var home = document.getElementById("home");
var about = document.getElementById("about");
var port = document.getElementById("port");
var skill = document.getElementById("skills");
var contact = document.getElementById("contact");
var plus = document.getElementById("plus");

home.addEventListener("click", switchHome);
about.addEventListener("click", switchAbout);
port.addEventListener("click", switchPort);
skill.addEventListener("click", switchSkills);
contact.addEventListener("click", switchContact);
plus.addEventListener("click", hideLanguage);



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
        <img src = "images/me.jpg" style="width: 100%;">
        </figure>
        <p> 
            My name is Raymond Gu. 
            I am a second semester senior pursuing a 
            degree in Computer Science at Cornell University. 
        </p>
        <p>
            Although I am completing my degree in Computer Science,
            I plan on pursuing medicine post graduation. Through various
            opportunites during my academic career, I was able to explore different
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
            into 7 different parts. In each part, we were asked to implement
            a step in the compiler, using the material we had learned in class.
            We chose to implement our compiler in OCaml. The code can be found
            <a href="https://github.coecis.cornell.edu/rg545/pa1"> here</a>.
        </p>
        <h3> Design Your Own System <h3>
        <h4> CS 3110: Data Structures and Functional Programming - Final Project</h4>
        
        <figure>
            <img src = "images/screenshot.png" style ="height: 100%; width:100%">
        <figcaption>
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
            The code can be found <a href="https://github.coecis.cornell.edu/awt46/fire-emblem"> here</a>.
        </p>
        `;
}

function switchSkills(){
    heading.innerHTML = 
        `<h1>Work Experience</h1> 
        <h3>Carrier Transicold</h3>
        <p>        
        Completed an internship at Carrier Transicold in Syracuse, NY. Here I worked with
        the software quality assurance team to carry out regression testing on products.
        My main project here included building a simulator to assist in the testing
        process. Additionally, I completed some technical writing under the supervision
        of other employees. As part of the program, interns from all departments were asked
        to participate in group networking activities, and create a presentation for their
        department to detail what sort of things they accomplished during their time at Carrier.
        </p>
        <p style= "font-size: 70%;">
        Completed Summer 2018
        </p>
        
        <h3>Upstate Rheummatology</h3>
        <p>
        Shadowed a physician at Upstate Rheumatology in Homer, NY. Sessions were generally either entire
        mornings or the entire day, if available. I was able to interact with patients as well as
        learn from the physician about certain diseases that she specialized in. Finally, I was able
        to observe how she interacted with her patients, in order to best help them with their symptoms.
        </p>
        <p style= "font-size: 70%;">
        Completed Fall 2018 to Winter 2019
        </p> 
        
        <h3> Syracuse VA Medical Center </h3>
        <p>Volunteered in patient transport at the Syracuse VA Medical Center in Syracuse, NY. I was asked 
        to help transport patients within the hospital, discharge patients, and escort visitors to their
        desired locations. Patients were trasnports in both stretchers and wheelchairs.
        Furthermore, I was asked to transport lab materials from the floors where they
        were obtained to the labs. I was able to interact with patients here, as well as
        some of the physicians who were taking care of the patients.  
        </p>
        <p style = "font-size: 70%;">
        Completed Summer 2019
        </p>
        `
        ;
}

function switchContact(){
    heading.innerHTML = 
        `<h1>Contact Me</h1> 
        <p>
            Email: rg545@cornell.edu
        </p>`;
}

function hideLanguage (){
    var progul = document.getElementById("ProgUL");
    if (progul.style.display === "none"){
        progul.style.display = "block";
    } else {
        progul.style.display = "none";
    }

}


function bfunc(){
    console.log("hello");
}

var mainText = document.getElementById("body");

function renderHTML(data){
    
}