import React from "react";

import Title from "components/home/Title";
import ButtonContainer from "components/home/ButtonContainer/ButtonContainer";

const Home: React.FC = () => {
  return (
    <>
      <Title title={"Buttons"} />
      <ButtonContainer />
    </>
  );
};

export default Home;
