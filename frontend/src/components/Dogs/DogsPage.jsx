import React from "react";
import DogCard from "./DogCard";
import "./dog.css";

DogsPage.propTypes = {};

function DogsPage(props) {
  const { allDogs } = props;

  return (
    <div>
      <h3>Here're all my dogs ❤️</h3>
      <section className="dogs-container">
        {allDogs.map((dog) => {
          return (
            <div key={dog.id}>
              <DogCard dog={dog} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default DogsPage;
