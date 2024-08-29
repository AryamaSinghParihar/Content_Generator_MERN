const asyncHandler = require("express-async-handler");
const axios = require("axios");
const ContentHistory = require("../models/ContentHistory");
const User = require("../models/User");
const { Configuration, OpenAIApi } = require("openai");
//----OpenAI Controller----
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openAIController = asyncHandler(async (req, res) => {
  const { prompt } = req.body; // Extract prompt from request body
  console.log(prompt);

  try {
    // Create completion using OpenAI client
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo", // Use the appropriate model
      messages: [
        { role: "system", content: "You are a helpful assistant." }, // System message
        { role: "user", content: prompt }, // User's prompt
      ],
      max_tokens: 600, // Set maximum tokens
    });

    // Extract generated content from the response
    const content = response.data.choices[0].message.content.trim();
    console.log(content);

    // Save the content history to the database
    const newContent = await ContentHistory.create({
      user: req.user._id,
      content,
    });

    // Update the user's content history and API request count
    const userFound = await User.findById(req.user.id);
    userFound.contentHistory.push(newContent._id);
    userFound.apiRequestCount += 1;
    await userFound.save();

    // Send the generated content as a response
    res.status(200).json(content);
  } catch (error) {
    // Handle any errors that occur
    console.error("Error generating content:", error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  openAIController,
};