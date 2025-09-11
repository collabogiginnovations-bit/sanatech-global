import React from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const CoreValueCard = ({ cardTitle, cardText }) => {
  useScrollAnimation()
  const cardDetails = [
    {
      cardTitle: "Integrity",
      cardText: "Upholding strong moral principles in all actions and decisions.",
    },
    {
      cardTitle: "Reliability",
      cardText: "Consistently delivering dependable services customers can trust.",
    },
    {
      cardTitle: "Affordability",
      cardText: "Providing quality solutions at fair, competitive prices.",
    },
    {
      cardTitle: "Accountability",
      cardText: "Taking responsibility for actions, outcomes, and commitments.",
    },
    {
      cardTitle: " Innovative Thinking ",
      cardText: "Continuously creating new ideas to drive growth and improvement.",
    },
    {
      cardTitle: " Transparency & Honesty",
      cardText: "Open communication with truth and fairness at all times.",
    },
    {
      cardTitle: " Quality Of Workmanship",
      cardText: "Ensuring excellence, precision, and durability in every project delivered.",
    },

  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 md:justify-start lg:gap-5 lg:justify-start  section">
      {cardDetails.map((card, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center gap-2 pb-4 items-center text-center  h-36 w-36 py-5 px-1 bg-amber-100 text-black rounded-xl"
          >
            <div className="flex justify-center items-center px-5">
              <small className="font-bold text-base">{card.cardTitle}</small>
            </div>
            <div>
              <small className="text-xs flex justify-center items-center text-center text-black">
                {card.cardText}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoreValueCard;
