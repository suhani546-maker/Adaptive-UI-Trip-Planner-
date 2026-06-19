

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});


setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 1000);
document
.getElementById("tripForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const response = await fetch(
        "http://localhost:3000/generate-trip",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                destination:
                    document.getElementById("destination").value,

                budget:
                    document.getElementById("budget").value,

                days:
                    document.getElementById("days").value,

                interests:
                    document.getElementById("interests").value
            })
        }
    );

   const data = await response.json();

document.getElementById("result").innerHTML =
    data.itinerary.replace(/\n/g, "<br>");
});




