// create array of dog breeds for small dog category
const dogs = [
    { 
        breed:'Toy Poodle',
        active:'no',
        shed:"false",
        size:'small'
    },
    {
        breed:'Jack Russell Terrier',
        active:'yes',
        shed:"true",
        size:'small'
    },
    {
        breed:'Yorkshire Terrier',
        active:'yes',
        shed:"false",
        size:'small'
    },
    {
        breed:'Boston Terrier',
        active:'no',
        shed:"true",
        size:'small'
    },
    {
        breed:'Bull Mastiff',
        active:'no',
        shed:"true",
        size:'large'
    },
    {
        breed:'Bouvier',
        active:'yes',
        shed:"false",
        size:'large'
    },
    {
        breed:'Standard Poodle',
        active:'no',
        shed:"false",
        size:'large'
    },
    {
        breed:'Husky',
        active:'yes',
        shed:"true",
        size:'large'
    }
]

$(document).ready(function(){
    
})
// prevent default on form submission

// create even listener on form submission
$('form').on('submit',function(e){
    e.preventDefault();
    $('.result').empty();
    
    



// create variables to store users input for size of dog/activity level/shedding
let userSize = $('input[name="size"]:checked').val()

let userActivity = $('input[name="active"]:checked').val()

let userShed = $('input[name="shed"]:checked').val()



    const sizeArray = dogs.filter((size)=>{
        return size.size === userSize
    })
    
    const activeArray = sizeArray.filter((active)=>{
        return active.active === userActivity
    })
    
    const shedArray = activeArray.filter((shed)=>{
        return shed.shed === userShed
    })
    



// display result on page
$('.result').append(`<h2>${shedArray[0].breed}</h2>`);
})