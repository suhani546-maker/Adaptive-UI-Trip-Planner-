const form = document.getElementById("tripForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const destination =
        document.getElementById("destination").value;

    const budget =
        document.getElementById("budget").value;

    const days =
        document.getElementById("days").value;

    const interests =
        document.getElementById("interests").value;

        document.getElementById("result").innerHTML = `
<div class="loader"></div>
<p>Generating your AI itinerary...</p>
`;

    const response = await 
    fetch(
        "http://localhost:3000/generate-trip",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                destination,
                budget,
                days,
                interests
            })
        }
    );

    const data = await response.json();

    document.getElementById("result")
        .innerHTML =
        `<pre>${data.itinerary}</pre>`;
});