import React from 'react';
import "./EntryList.css";
import FavoriteButton from "../FavButton/FavButton.jsx";
import Divider from "../Divider/Divider.jsx";

export default function EntryList() {
    const entries = [
        {
          id: 1000,
          date: "Feb 5, 2025",
          motto: "We are in a state of chaos",
          notes:
            "Today I learned about React State. It was fun! I can't wait to learn more.",
        },
        {
          id: 999,
          date: "Feb 4, 2025",
          motto: "Props, Props, Props",
          notes:
            "Today I learned about React Props. Mad props to everyone who understands this!",
        },
        {
          id: 998,
          date: "Feb 3, 2025",
          motto: "How to nest components online fast",
          notes:
            "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
        },
        {
          id: 997,
          date: "Feb 2, 2025",
          motto: "I'm a React Developer",
          notes: "My React-ion when I learned about React: 😍",
        },
    ];

    return (
        <section className="entry-list">
            {entries.map((entry, index) => (
                <React.Fragment key={entry.id}>
                    <p className="entry-list__date">{entry.date}</p>
                    <div className="entry-list__content">
                        <h1 className="entry-list__motto">{entry.motto}</h1>
                        <p className="entry-list__text">{entry.notes}</p>
                        <FavoriteButton />
                    </div>
                    {index < entries.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </section>
    );
}
