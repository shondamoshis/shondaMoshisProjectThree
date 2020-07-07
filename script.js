const dogs = [
    { 
        breed:'Toy Poodle',
        active:'no',
        shed:"false",
        size:'small',
        image:"./assets/toyPoodle.jpg"
    },
    {
        breed:'Jack Russell Terrier',
        active:'yes',
        shed:"true",
        size:'small',
        image:"./assets/jackRussell.jpg"
    },
    {
        breed:'Yorkshire Terrier',
        active:'yes',
        shed:"false",
        size:'small',
        image:"./assets/yorkie.jpg"
    },
    {
        breed:'Boston Terrier',
        active:'no',
        shed:"true",
        size:'small',
        image:"./assets/boston.jpg"
    },
    {
        breed:'Yellow Lab',
        active:'no',
        shed:"true",
        size:'large',
        image:"./assets/lab.jpg"
    },
    {
        breed:'Bouvier',
        active:'yes',
        shed:"false",
        size:'large',
        image:"./assets/bouvier.jpg"
    },
    {
        breed:'Standard Poodle',
        active:'no',
        shed:"false",
        size:'large',
        image:"./assets/poodle.jpg"
    },
    {
        breed:'Husky',
        active:'yes',
        shed:"true",
        size:'large',
        image:"./assets/husky.jpg"
    }
]
const cats = [
    {
        breed:'Persian',
        hair:'long',
        cuddles:'no',
        size:'normal',
        image:"./assets/persian.jpg"
    },
    {
        breed:'Siberian',
        hair:'long',
        cuddles:'yes',
        size:'normal',
        image:"./assets/siberian.jpg"
    },
    {
        breed:'Maine Coon',
        hair:'long',
        cuddles:'no',
        size:'bigger',
        image:"./assets/maineCoon.jpg"
    },
    {
        breed:'Ragdoll',
        hair:'long',
        cuddles:'yes',
        size:'bigger',
        image:"./assets/ragdoll.JPG"
    },
    {
        breed:'Abyssinian',
        hair:'short',
        cuddles:'yes',
        size:'bigger',
        image:"./assets/abyssinian.jpg"
    },
    {
        breed:'Egyptian Mau',
        hair:'short',
        cuddles:'no',
        size:'bigger',
        image:`./assets/egyptianMau.jpg`
    },
    {
        breed:'Siamese',
        hair:'short',
        cuddles:'yes',
        size:'normal',
        image:"./assets/siamese.jpg"
    },
    {
        breed:'American Bobtail',
        hair:'short',
        cuddles:'no',
        size:'normal',
        image:"./assets/bobtail.jpg"
    }
]

$(document).ready(function(){

$('#dogForm').on('submit',function(e){
    e.preventDefault();
    $('.result').empty();
    $('.resultPic').empty();
    $('html, body').animate({scrollTop:$(document).height()},'slow');
   
    
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
    

$('.result').append(`<h2>${shedArray[0].breed}</h2>`);
    $('.resultPic').append(`<img src=${shedArray[0].image}> `)
});

$('#catForm').on('submit', function (e) {
    e.preventDefault();
    $('.catResult').empty();
    $('.resultPic').empty();
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
    
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

$('.catResult').append(`<h2>${catSizeArray[0].breed}</h2>`);

$('.resultPic').append(`<img src=${catSizeArray[0].image}> `)
});

});
