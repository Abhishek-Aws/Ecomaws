import React from "react";
import{ useState, useEffect } from "react";
import "./Client.css";
import data from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Client = () => {

  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 2500);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div>
      <div
        className="sec_title position-relative text-center"
        style={{ marginBottom: "30px", marginTop: "30px" }}
      >
        <h2
          class="off_title"
          style={{
            fontWeight: 600,
            color: "#2c2c2c",
            opacity: 0.11,
            position: "absolute",
            top: 580,
            left: "50%",
            fontStyle: "italic",
            transform: "translate(-50%, 0%)",
            WebkitTransform: "translate(-50%, 0%)",
            fontSize: "55px",
            fontFamily: "initial",
            lineHeight: 36,
          }}
        >
          Testimonials
        </h2>
        <h3>Client Reviews</h3>
      </div>         
      <section className="section">
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <p className="text">{quote}</p>
              <h4>{name}</h4>
              <p className="title">{title}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
        <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
      
    </div>
  );
};
export default Client;
