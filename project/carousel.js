let slideindex = 1;

const slide = document.querySelectorAll('.slide')

const totalslides= slide.length

// console.log(totalslides)

const showslide = (index) => {
    slide.forEach((slide, i) => {
        slide.classList.toggle('active', i === index)
    });
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
};

// console.log(slideindex = (slideindex + 1) %totalslides);
// showslide(slideindex)



const nextslide =() =>{
    slideindex = (slideindex + 1) % totalslides
    showslide(slideindex);
}

const prevslide = () =>{
    slideindex = (slideindex - 1 + totalslides) % totalslides;
    showslide(slideindex)
}


document.querySelector('.next').addEventListener('click', nextslide)
document.querySelector('.prev').addEventListener('click', prevslide)

setInterval(nextslide, 9000);//after every 4 seconds //