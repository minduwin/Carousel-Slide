const images = document.querySelectorAll('.carousel img');
const thumbs = document.querySelectorAll('.thumbs img');
const dots = document.querySelector('#dots');

let speed = 5000;
let index = 0;
let intervalID;

// Create clickable dots dynamically based on the number of images
images.forEach((image, i) => {
    const span = document.createElement('span');
    span.className = 'dot';
    if(i === 0){
        span.classList.add('active');
    }
    span.addEventListener('click', () => {
        index = i;
        startInterval();
        updateImg();
    });
    dots.appendChild(span);
})

//Clickable thumbnails
thumbs.forEach((item, i) => {
    item.addEventListener('click', () => {
        index = i;
        startInterval();
        updateImg();
    })
})

// Set speed to carousel images
startInterval();
function startInterval(){
    
    if(intervalID){
        clearInterval(intervalID);
    }
    intervalID = setInterval(() => {
        index++;
        if(index === images.length){
            index = 0;
        }
        updateImg();
    }, speed)
}

//Update images, shifting classes between items
updateImg();
function updateImg(){
    images.forEach(item => item.classList.remove('active'));
    images[index].classList.add('active');

    thumbs.forEach(item => item.classList.remove('thumbsActive'));
    thumbs[index].classList.add('thumbsActive');

    const newDots = document.querySelectorAll('.dot');
    newDots.forEach(item => item.classList.remove('active'));
    newDots[index].classList.add('active');
}