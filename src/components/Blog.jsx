import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cardData = [
    {
      title: "IPB Museum",
      text: "Bogor Agricultural Institute's college museum which presents the history of the struggle, establishment, and development of IPB from time to time.",
      image: "/img/museum.jpg",
      expandedText:
        "Visiting the IPB Museum, which chronicles the history of the Bogor Agricultural Institute (IPB), provides valuable insights into the institution's journey of establishment, growth, and contributions to agricultural sciences over time. Gain an understanding of the historical struggles and milestones that shaped IPB into a prominent center for agricultural education and research in Indonesia. Additionally, I acquire knowledge about the pivotal figures, significant achievements, and innovations pioneered by the university. This experience can also inspire a deeper appreciation for the evolution of higher education in agriculture and its role in addressing national and global challenges.",
    },
    {
      title: "Lokasena",
      text: "Exploring the culture of the archipelago as well as batik ladle workshops and making clay crafts.",
      image: "/img/loasema.jpg",
      expandedText:
        "Participating in Lokasena, an initiative that explores the rich cultural heritage of the Indonesian culture through batik workshops and clay craftmaking, offers a multifaceted learning experience. Develop practical skills in traditional art forms, such as creating intricate batik designs using wax-resist dyeing techniques and crafting functional or decorative items from clay. Furthermore, gain a deeper understanding of Indonesia’s diverse cultural history, artistic expressions, and the significance of these crafts in local traditions and communities. This hands-on engagement fosters creativity, cultural appreciation, and an awareness of the importance of preserving intangible cultural heritage.",
    },
    {
      title: "International Education Festival",
      text: "An expo designed to connect students with international student organizations and global opportunities.",
      image: "/img/inter fest.jpg",
      expandedText:
        "International Education Festival provides an invaluable opportunity to gain insights into global educational pathways and connect with international student organizations. I acquired knowledge about study abroad programs, scholarships, and institutions worldwide, enabling me to make informed decisions about pursuing education on a global scale. Additionally, I developed cross-cultural communication skills by engaging with representatives and peers from diverse cultural backgrounds. This experience not only broadens my academic and career horizons but also enhances my understanding of international collaboration and the value of global networks in today's interconnected world.",
    },
    {
      title: "Puncak Bogor",
      text: "Class bonding and farewell party for medical students at Puncak Bogor.",
      image: "/img/punak.jpg",
      expandedText:
        "Attending a class bonding and farewell party for medical students at Puncak Bogor offers a unique opportunity to strengthen interpersonal connections and foster a sense of camaraderie among peers. Through collaborative activities and informal interactions, build up teamwork, communication, and social skills that are essential for professional and personal growth. Moreover, this activity provides a platform to reflect on shared experiences, celebrate achievements, and build lasting memories in a serene and inspiring environment. Such gatherings can also enhance emotional well-being and reinforce a supportive network crucial for navigating future challenges in the medical field.",
    },
    {
      title: "Agrisymphony",
      text: "The biggest student festival performance at IPB as a form of collaboration from various student elements that present diversity at IPB University.",
      image: "/img/agsn.jpg",
      expandedText:
        "Agrisymphony offers a dynamic festival to experience and contribute to a vibrant celebration of diversity and collaboration. Gain organizational and teamwork skills by engaging with students from various disciplines and cultural backgrounds to create a unified and impactful event. Moreover, this experience enhance my creativity, event management capabilities, and ability to work effectively in diverse groups. By witnessing and contributing to performances and exhibitions, I will also deepen your appreciation for the cultural and academic diversity that defines the university community, fostering a holistic understanding of inclusive collaboration.",
    },
    {
      title: "Data Mining Workshop",
      text: "From Pixel to Pattern: A Deep Dive into Computer Vision.",
      image: "/img/data mining.jpg",
      expandedText:
        'Participating in the "From Pixel to Pattern: A Deep Dive into Computer Vision" data mining workshop provides a comprehensive introduction to the principles and techniques of computer vision. Acquire valuable knowledge in image processing, pattern recognition, and machine learning, learning how to extract meaningful insights from visual data. Furthermore, hands-on activities and real-world applications will enhance my technical skills in utilizing advanced algorithms and tools commonly employed in the field. This workshop also fosters problem-solving and analytical abilities, equipping me with the expertise to address complex challenges in industries such as artificial intelligence, healthcare, robotics, and more.',
    },
  ];

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">My Journey </h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card ${activeCard === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">

              <h2 className="card-title">{card.title}</h2>
              <p className="card-text">{card.text}</p>

            </div>
          </div>
        ))}
      </div>

      {activeCard !== null && (
        <div className="expanded-card">
          <div className="expanded-card-content">

            <h2>{cardData[activeCard].title}</h2>
            <p>{cardData[activeCard].expandedText}</p>
            <button
              onClick={() => setActiveCard(null)}
              className="close-button"
            >
              Close
            </button>

          </div>
        </div>
      )}
      <p className="coming-soon">And soon, many more adventures...</p>
    </div>
  );
};

export default Blog;
