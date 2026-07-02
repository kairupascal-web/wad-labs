//this is a comment
/**
 * *This is also a comment (multi-line comment) 
  */

// re-assingment redeclaration,
// scope, must be initialized

//let,const and var (declaring variables in JS)
var student= "Lisa";
student="Ngacha"; //re-assigned

//printing out the value of student on the console

console.log('var: ' , student);

//let course = "HTML";
course ="JavaScript"; //re-assigned(?)
console.log('let ' , course);

const university = "Strathmore University";
//university = "USIU"; // re-assigned
console.log ('const: ' , university);

//let course = "trust programming";
console.log('let: ', course);

//const university = "UON";
console.log('const: ' , university);

//block - in between curly braces
if(true) {
    var age= 20;
    let grade = "A";
    const subject = "Chemistry";

    console.log('----inside block----')
    console.log('var' , age);
    console.log('let' , grade);
    console.log('const' ,subject);
}

    console.log('----outside block----')
    console.log('var' , age);
    //console.log('let' , grade);
  //  console.log('const' , subject);

    /**functions*/
    //no types(loosely typed)
    //1.Defined 
    
    /**
     * A functon that calculates the area of a rectaangle
     * @param number width 
     * @param number height 
     * @returns number
     */
    function calculateArea(width , height){
        let area = 0;
        //someone has provided a width and height
        if (width = null && height !==null){
          console.error('You must provide a width and height!');
          //return;
        }else if(height == null){
            console.error('You must provide a width!');
            //return;
        }else if (height==null){
            console.error('You must provide the height!');
            //return;
        }else{
            area = width * height;
            return area;
        }
        area = width * height;
        return area;
        //printing out and returning are NOT the same.
        //console.log('function calculateArea')
    }

    //2.function expression
    const calculateAreaOfCircle = function(radius){
        return Math.PI * radius * radius;
    }
    console.log('The circle has an area of',
        calculateAreaOfCircle(7.6)
    );

    //3.Arrow 
    const calculateAreaOfTriangle = (base,height) => {
        return 0.5 * base * height
    }
    console.log('The triangle has an area of',
        calculateAreaOfTriangle(7,15)
    );
    //call it
    let area1 = calculateArea();
    console.log("The area is" , area1);

    let area2 = calculateArea(8);
    console.log("The area is" , area2);

    let area3 = calculateArea(8,3);
    console.log("The area is", area3);

    calculateArea();

    //Javascript Arrays

    //1.Array definition
    //ordered
    //zero-indexed
    //10 - index 0, 25 - index 1, ...

    const scores = [ 10, 25, 7, 42,18];
    //10
    scores[0];
    console.log(scores[0]);//10
    console.log(scores[3]);//42
    console.log(scores[4]);//18
    console.log(scores[1]);//25
    console.log(scores[2]);//7

    //they don't have to be numbers
    
    //an array of strings
    let governors = [
        "Johnson Sakaja",
        "Cecily Mbarire",
        "Ann Wiguru",
        "Anyang' Nyong'o"
    ];

    console.log(governors[0]);
    console.log(governors[3]);

    //n-d arrays
    //2d
    let senators = [
        [1, "Mohammed Faki" , "ODM"],
        [2, "Issa Juma","ODM"],
        [3, "Steward Madzayo", "ODM"]
    ];
    console.log(senators[1][1]);//Issa
    console.log(senators[1][2]);//ODM
    console.log(senators[2][1]);//steward
     
    //3d
    let sample_3d = [
        ["one",
            ["two"]
        ],
        ["three",
            ["four"]
        ],
    ];

// size or length of an array
// Kenya has b governors
console.log("Kenya has ",governors.length,
    " governors");

//Kenya has c senators
console.log("Kenya has ",senators.length,
    " senators");

// map
let double_scores = scores.map(score => score * 2);
console.log(double_scores);    
//filter (get scores above 30)
let score_above_30 
    = scores.filter(score => score > 30);
console.log(score_above_30);

//loop
governors.forEach(function(governor){
    console.log(governor);
});

senators.forEach(function(senator_array){
    console.log(senator_array[1]); //names
});

// @TODO : Objects
let studentObject = {
    name: "Fidel Omondi",
    "admission number": 1,
    course: "BBIT",
    group: "2B",
    gender: "male",
    fees_paid: true,
    unit: "Web Application Development",
    attendance: 20, //number of hours attended in the unit so far
    updateAttendance: function(){
        this.attendance = this.attendance + 1;
    },
    clubs: [
        'sumg','drama','aisec','mental health club'
    ]
}

//access
console.log(studentObject.name);// the dot notation
console.log(studentObject["admission number"]);// square brackets
console.log(studentObject["unit"]);
// ERROR -> studentObject.admission number <- ERROR
console.log(studentObject);

// function call within an object
studentObject.updateAttendance(); // adds 1 to attendance property
studentObject.updateAttendance(); // adds 1 to attendance property
studentObject.updateAttendance(); // adds 1 to attendance property
studentObject.updateAttendance(); // adds 1 to attendance property
studentObject.updateAttendance(); // adds 1 to attendance property
console.log(studentObject.attendance); //21


// loop

// keys of an object
let studentObjectKeys = Object.keys(studentObject);

// values of an object
let studentObjectValues = Object.values(studentObject);

// keys and values of an object
let studentObjectKV = Object.entries(studentObject);

console.log(studentObjectKeys); //an array of the keys
console.log(studentObjectValues); //an array of the values
console.log(studentObjectKV); //an array of the keys and values

studentObjectKeys.forEach(function(key){
    console.log(key); // name
    // console.log(key); // admission number 2nd run
    // console.log(key); // course 3rd run

});    

// Document Object Model (DOM)

console.log(document); 
console.log(typeof (document));

// Access elements from our page
//vintage methods
let heading = document.getElementById('mainHeading');
let form_row = document.getElementsByClassName('form-row');
//modern
// querySelector returns the first matching element(singlular)
let interactive_lab_section = document.querySelector("#interactive-lab");
let form_row_v2 = document.querySelectorAll(".form-row");
let interactive_lab_paragraph = document.querySelector("#interactive-lab p");

//querySelctorAll - returns all matching
let sections = document.querySelectorAll('section');

console.log("==== DOM Access things from the page====");
console.log(heading);
console.log(form_row);
console.log(interactive_lab_paragraph);
console.log(interactive_lab_paragraph.textContent);
console.log(sections);

console.log("==== DOM Update 'things' on the page====");
interactive_lab_paragraph.textContent = "Text Changed!";

let previewImage = document.querySelector("img");
previewImage.setAttribute("title","New Image Title");
console.log(previewImage);

//we can change the css
interactive_lab_paragraph.style.color = "green";


console.log("==== Handling event on our page====");
// case 1 - click

//1a) get the element ftrom our page via the dom(document)
let changeTextBtn = document.querySelector("#changeTextBtn");

//1b) attach an eventlistener to the element a.k.a handle 
//      the event
changeTextBtn.addEventListener('click', function(event){
    //1c) do something
    console.log("Someone clicked me!");
    let demoText = document.querySelector("#demoText");
    demoText.textContent = "I have been changed coz you clicked";
});

// case 2 - highlighting sections on click
let highlightSectionsBtn = document.querySelector("#highlightSectionsBtn");
let allSections = document.querySelectorAll("section");

highlightSectionsBtn.addEventListener("click", event => {
    //function body a.k.a what happens when the button is clicked
    //console.log("highlight section button clicked");
    //console.log(allSections);

    allSections.forEach(section => {
        section.classList.toggle("section-highlight");
    });
    
});

// case 3 - greetings
let nameInput = document.querySelector("#nameInput");// textbox
let nameOutput = document.querySelector("#nameOutput"); // paragraph
//when someone enters a name input
nameInput.addEventListener("input", event => {
    // console.log("typing...");
    nameOutput.textContent = "Hello " + nameInput.value + "!";
});

// case 4 - character counter
let commentInput = document.querySelector("#commentInput"); // textarea
let charCount = document.querySelector("#charCount"); // paragraph

commentInput.addEventListener("input", event => {
    let totalChars = commentInput.value.length; //number of characters typed into the textarea
    charCount.textContent = "Character: "+totalChars;

    //@TODO - modify this to count the number of words instead
});

// case 5 - keyboard event
let keyOutput = document.querySelector("#keyOutput"); //paragraph
document.addEventListener("keydown", event => {
    keyOutput.textContent = "You pressed: "+ event.key;
});

//case 6 - adding items to a list
let wishlistInput = document.querySelector("#wishlistInput"); // textbox
let addWishListButton = document.querySelector("#wishlistForm button"); // add button
let wishlistItems = document.querySelector("#wishlistItems"); // Unordered list (UL)

addWishListButton.addEventListener("click", event => {
    event.preventDefault(); // stop the form from being submitted

    // we only want to addd when there is a value in the wishlistinput
    if(wishlistInput.value != ""){
        console.log("You typed: "+ wishlistInput.value);

        // dynamic create elements
        let li = document.createElement("li");
        let button = document.createElement('button');
        li.textContent = wishlistInput.value; //<li> TEXT CONTENT </li>
        button.textContent = "Delete"; //<button> Delete </button>

        //add an eventListener for the new element
        button.addEventListener("click",event=>{
            li.remove();
        });

        // add the button to the li
        li.appendChild(button); // <li> textcontent <button></button> </li>
        // add the new li to the existing ul(unordered list)
        wishlistItems.appendChild(li);
        // we clear the wishlistinput
        wishlistInput.value = "";

    }else{
        alert("Please type a wish");

    }

});
//case 6b-remove elements from the list
let deleteButtons=document.querySelectorAll("#wishlistItems button");
console.log(deleteButtons);

let firstDeleteButton=document.querySelector("#wishlistItems button");
console.log(firstDeleteButton);
//deletButtons is a nodelist(a.ka.)1 or many buttons as a list[]
deleteButtons.forEach (button=>{
    //one button at a time
    button.addEventListener("click",event=>{
       // console.log("delete button has been clicked");
       button.parentElement.remove();
       //<li>
       // something<button>delete</button>
       //</li>
       //button.closest("li").remove();
    });
});

//case 7- form submit,show the submitted details on the page
let feedbackForm=document.querySelector("#feedbackForm");//form
let feedbackOutput=document.querySelector("#feedbackOutput");//div

feedbackForm.addEventListener("submit",event=>{
    //prevent the form from being submitted normally
    event.preventDefault();
   // console.log("form submitted");

   //get form inputs
   let nameInput=document.querySelector("#fanName");
   let emailInput=document.querySelector("#fanEmail");
   let messageInput=document.querySelector("#fanMessage");

   //make it clear for u
   let name=nameInput.value;
   let email=emailInput.value;
   let message=messageInput.value;
   //update the div(feedbackOutput)with the values
   feedbackOutput.innerHTML=
   "<b>feedback submitted</b><br>"+
   "<p>name"+name+"</p>"+
   "<p>email:"+email+"</p>"+
   "<p>message:"+message+"</p>";
   //clear input fields on the form
   nameInput.value="";
   emailInput.value="";
   messageInput.value="";
   //bonus
   feedbackOutput.classList.add("success-text");
});
//forgotten case
let resetBtn=document.querySelector("#resetBtn");
resetBtn.addEventListener("click",event=>{
    //undo changes
demoText.textContent=
"click the button to modify thus text using javascript.";
//highlight sections
});