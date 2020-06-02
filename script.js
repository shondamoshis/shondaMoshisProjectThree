// create array of dog breeds for small dog category
const smallDog = [
    { 
        breed:'Toy Poodle',
        active:'no',
        shed:false
    },
    {
        breed:'Jack Russell Terrier',
        active:'yes',
        shed:true
    },
    {
        breed:'Yorkshire Terrier',
        active:'yes',
        shed:false
    },
    {
        breed:'Boston Terrier',
        active:'no',
        shed:true
    }

]

// create array of dog breeds for large dog cateory
const largeDog = [
    {
        breed:'Bull Mastiff',
        active:'no',
        shed:true
    },
    {
        breed:'Bouvier',
        active:'yes',
        shed:false
    },
    {
        breed:'Standard Poodle',
        active:'no',
        shed:false
    },
    {
        breed:'Husky',
        active:'yes',
        shed:true
    }
]

$(document).ready(function(){
    console.log('ready')
})
// prevent default on form submission

// create even listener on form submission
$('form').on('submit',function(e){
    e.preventDefault();

})

// create variable to store users input for size of dog
let userSize;
// create object with users input
let userChoices = {};
// create if statement to determine which loop will start based on dog size choice

// create loop for small dog array

// create loop for large dog array

// create if statement to compare users input array to corresponding properties in the objects in the array of dog breeds

// create variable for result

// display result on page

