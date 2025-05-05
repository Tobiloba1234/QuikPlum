// let name = "Linda"
// let greeting = "Hi there"

// // Create a function that logs out "Hi there, Linda!" when called

// function callOut(){
//     let fullGreeting = greeting + ", " + name + "!"
//     console.log(fullGreeting)

// }
// const nav = document.querySelector('.nav')
// const navLinks = document.querySelectorAll('.nav-links')
// const menuIcons = document.querySelector('.menu-icons')
// const closeIcon = document.querySelector('#close-icon')
// const menuIcon = document.querySelector('#menu-icon')

const hamburgerIcon = document.querySelector("#hamburger-icon")
const closeIcon = document.querySelector("#close-icon")
const navLinks = document.querySelector(".nav-links")
console.log(navLinks)

//Perform Testimonial Content Slideshow
const reviewSlider= document.querySelector(".review-slider")//Container for all slides
console.log(reviewSlider)
const reviewSlides= document.querySelectorAll(".review-slide")//Invidividual slides for each testimonal content
console.log(reviewSlides)
const  prevButton = document.getElementById("prev-btn")//prev button
const nextButton = document.getElementById("next-btn")// next button
const  reviewContainer = document.querySelector(".review-container")// Contains review slider, icon and view all reviews button

//Create a simple open and close display of menu contents
hamburgerIcon.addEventListener("click",function(){
  hamburgerIcon.style.display = "none"
  closeIcon.style.display = "block"
  navLinks.classList.toggle('show-nav')
  

})

function closeMenu(){
    navLinks.classList.remove('show-nav')
    hamburgerIcon.style.display = "block"
    closeIcon.style.display = "none"
}

window.addEventListener('scroll', function(){
    if( navLinks.classList.contains('show-nav')){
        closeMenu()
    }
})

let currentIndex = 0 // Decalaring variable name as currentIndex which is decalred as 0

let autoSlideInterval  // A variable name autoSliderInterval for holiding automatic timeline for every slide to be changed

//Function to change the slide based on the current index available

function changeSlides(index){
    if(index >= reviewSlides.length){//Check if parameter(index) is greater than equal to the testimonal reviews by clients.
        console.log(index)// 4 
        console.log(reviewSlides.length)//4
        currentIndex = 0//The slide will start from the beginning if it gets to the last review content.
    }

    else if(index < 0){// If the parameter is less than 0
        currentIndex = reviewSlides.length - 1 //Then currenyIndex(0) will now be reducing the content by 1 and going forward until it reaches the last side.
        console.log(currentIndex)
    }

    else {
        currentIndex = index
        console.log(currentIndex)
    }

    reviewSlider.style.transform =`translateX(-${currentIndex * 100}%)`
    
}


//Function for changing the testimonal contents
function nextSlide(){
    changeSlides(currentIndex + 1)// Calling the function changeSlides and passing an argument replacing index as (currentIndex(0)[initial slide] + 1)

}

2
function prevSlide(){
    changeSlides(currentIndex - 1)// Calling the function changeSlides to replace parameter(index) as (currentIndex(0)[initial slide] - 1)
}

// function startAutoSlide(){
//     autoSlideInterval =  setInterval(nextSlide, 4000)// Automatic slide every 4000ms for the testimonal content
    
// }

// function stopAutoSlide(){
//     clearInterval(autoSlideInterval)// Stop automatic slide of conntents every 4000ms for the testimonal content
// }

nextButton.addEventListener('click', nextSlide)// Update the next button to perform nextSlide- changeSlides(currentIndex + 1)

prevButton.addEventListener("click", prevSlide)// Update the previous button to perform prevSlide- changeSlides(currentIndex -1)

reviewContainer.addEventListener("mouseover", stopAutoSlide)// When the mouse goes over the reviewContents then automatic slide should stop immediately.

reviewContainer.addEventListener("mouseout", startAutoSlide)//When the mouse goes out of the reviewContents then automatic slide should resume.

startAutoSlide()//Start automatic slide of testimonials content whem page reloads.