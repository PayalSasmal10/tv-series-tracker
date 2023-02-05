import { useEffect } from "react";
import viewParticularShow from "./ViewParticularShow";

const ParticularShow = ({ selectedSeries }) => {
  const selectedSeriesList = selectedSeries.map((particularSeries) => (
    <viewParticularShow 
       key={particularSeries.key} 
       id={particularSeries.id}
    //    name={particularSeries.name}
       premiered={particularSeries.premiered}
       network={particularSeries.network}
    />
  ));
  return (
    <section>
        {selectedSeriesList}
    </section>
    );
};

export default ParticularShow;
