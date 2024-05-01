/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/learningapp.png";

const imageAltText = "image of our learning app";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Cognitive Semantic Search",
    description: "Rank courses according to what the user is interested in, grounded in user content.",
    url: "https://learn.microsoft.com/en-us/azure/architecture/ai-ml/openai/idea/search-and-query-using-openai-service",
    image: "https://raw.githubusercontent.com/codess-aus/CWBHackathonApp/main/src/images/semanticsearch.png", // replace with your image URL
  },
  {
    title: "Vector Embeddings",
    description: "Linking meaningful content and ideas",
    url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/tutorials/embeddings?tabs=python-new%2Ccommand-line&pivots=programming-language-python",
    image: "https://raw.githubusercontent.com/codess-aus/CWBHackathonApp/main/src/images/designacharacter.png", // replace with your image URL
  },
  {
    title: "Chat Avatar",
    description: "Human-like avatars to interact with users in a more engaging way.",
    url: "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/text-to-speech-avatar/what-is-text-to-speech-avatar",
    image: "https://raw.githubusercontent.com/codess-aus/CWBHackathonApp/main/src/images/character2.png", // replace with your image URL
    // replace with your image URL
  },
  {
    title: "Speaker Recognition",
    description: "AI recognises speaker and interacts with them contextually.",
    url: "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speaker-recognition-overview",
    image: "https://raw.githubusercontent.com/codess-aus/CWBHackathonApp/main/src/images/blockchain.png", // replace with your image URL
  },
];

const Features = () => {
  return (
    <section className="padding" id="features">
      <h2 style={{ textAlign: "center" }}>Features</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                <img src={project.image} alt={project.title} style={{ width: "100%", height: "auto" }} /> {/* Add this line */}
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
