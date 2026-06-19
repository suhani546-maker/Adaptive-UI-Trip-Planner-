require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

app.post("/generate-trip", async (req, res) => {

    try {

        const {
            destination,
            budget,
            days,
            interests
        } = req.body;

        const prompt = `
Create a detailed travel itinerary.

Destination: ${destination}
Budget: ${budget}
Days: ${days}
Interests: ${interests}

Give a day-by-day travel plan.
`;

        const chatCompletion =
            await groq.chat.completions.create({

                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ],

                model: "llama-3.3-70b-versatile"
            });

        const itinerary =
            chatCompletion.choices[0].message.content;

        res.json({
            itinerary
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to generate itinerary"
        });

    }

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});