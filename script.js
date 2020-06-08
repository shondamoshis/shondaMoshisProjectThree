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
const cats = [
    {
        breed:'Persian',
        hair:'long',
        cuddles:'no',
        catSize:'normal'
    },
    {
        breed:'Siberian',
        hair:'long',
        cuddles:'yes',
        catSize:'normal'
    },
    {
        breed:'Maine Coon',
        hair:'long',
        cuddles:'no',
        size:'bigger'
    },
    {
        breed:'Ragdoll',
        hair:'long',
        cuddles:'yes',
        size:'bigger'
    },
    {
        breed:'Chausie',
        hair:'short',
        cuddles:'yes',
        size:'bigger'
    },
    {
        breed:'Egyptian Mau',
        hair:'short',
        cuddles:'no',
        size:'bigger'
    },
    {
        breed:'Siamese',
        hair:'short',
        cuddles:'yes',
        size:'normal'
    },
    {
        breed:'American Bobtail',
        hair:'short',
        cuddles:'no',
        size:'normal'
    }
]

$(document).ready(function(){
    

// prevent default on form submission

// create even listener on form submission
$('#dogForm').on('submit',function(e){
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
});

$('#catForm').on('submit', function (e) {
    e.preventDefault();
    $('.catresult').empty();
    


    let userHair = $('input[name="hair"]:checked').val()

    let userCuddle = $('input[name="cuddle"]:checked').val()

    let userCatSize = $('input[name="catSize"]:checked').val()

   

    const hairArray = cats.filter((hair) => {
        return hair.hair === userHair
       
    })

    const cuddleArray = hairArray.filter((cuddle) => {
        return cuddle.cuddles === userCuddle
    })

    const catSizeArray = cuddleArray.filter((catsize) => {
        return catsize.size === userCatSize
    })
    console.log(hairArray, cuddleArray, catSizeArray)
    // display result on page
    $('.catResult').append(`<h2>${catSizeArray[0].breed}</h2>`);

})

})
