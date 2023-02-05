import { useEffect } from "react";

const ParticularShow = ({id}) => {

    useEffect(() => {
        const fetchParticularShow = async() => {
            const response = await fetch(`https://api.tvmaze.com/shows/?id=${id}`);

            console.log(response);

        };
    },[]);
};

export default ParticularShow;