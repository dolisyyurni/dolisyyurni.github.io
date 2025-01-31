import React from "react";
import "./Timeline.css";

const timelineData = [
  {
    date: "2018",
    title: "Sugar Group Junior High School",
    description: [
      { text: "American Mathematic Olympiad 2018 Participation", link: "https://drive.google.com/file/d/1Tda8wlb5kJdXHE6AKRFh5tCQ8OddxqhL/view?usp=drive_link" },
      { text: "Mathematic Olympiad 2020 Participation", link: "https://drive.google.com/file/d/1FmHHLNa0zN3qFW-vG6uBclpmJnH3Xqzz/view?usp=drive_link" },
      { text: "Indonesian Numeracy and Literacy Olympiad 2021 Participation", link: "https://drive.google.com/file/d/1-ihFlrRTt1NkzyqKSJuZ48vslNkKwkFn/view?usp=drive_link" },
      { text: "Indonesian Science Competition 2021 Participation", link: "https://drive.google.com/file/d/1fmQjL-I6KedwYBlf6hcqQwDXPSM24Z6n/view?usp=drive_link" },
    ],
    icon: "🏫",
  },
  {
    date: "2021",
    title: "Kibang 1 Senior High School",
    description: [
      { text: "Olimpiade Update Mini Competition 2021 Participation", link: "https://drive.google.com/file/d/1Ul8QddT_MLvpgeGJ9GPtTcGag_U6qdGd/view?usp=drive_link" },
      { text: "Jenius Science Olympiad 2022 Participation", link: "https://drive.google.com/file/d/1aqsgTaaDykEhRR8Rg174aBFfV1v02FEN/view?usp=drive_link" },
      { text: "Bima Science Competition 2022 Participation", link: "https://drive.google.com/file/d/1N6UnYbDG0tMYsCbusHoRI1K-7Qqpu4XQ/view?usp=drive_link" },
      { text: "First Place in Science Olympiad 2022", link: "https://drive.google.com/file/d/1lQgbbMole330kAHEsiLR_ug8_IQdjnUu/view?usp=drive_link" },
      { text: "First Place in Scouting Olympiad 2023", link: "https://drive.google.com/file/d/1lMzAwpDN-Fn4FH5wzMuy3xJsQvNpHx0B/view?usp=drive_link" },
      { text: "First Place in Design Poster GenRe Competition 2023", link: "https://drive.google.com/file/d/1lMfsHtSWrEi4MspVtw5rUVgzgRVncvem/view?usp=drive_link" },
    ],
    icon: "⏰",
  },
  {
    date: "2024",
    title: "IPB University",
    description: [
      { text: "Best 'Hope in Action' Project Salam Al-Hurriyyah 2024", link: "https://drive.google.com/file/d/1mJvyF58NFiY25KYCxh5t9yqyiy3FtEuV/view?usp=drive_link" },
    ],
    icon: "📖",
  },
];

const Timeline = () => {
  return (
    <div>
      <h1 className="section-title">Education Timeline</h1>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-header">
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-date">{item.date}</div>
            </div>
            <div className="timeline-content">
              <h2 className="timeline-title">{item.title}</h2>
              <div className="timeline-description">
                {item.description.map((desc, i) => (
                  <a
                    key={i}
                    href={desc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    {desc.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
