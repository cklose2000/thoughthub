"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Boost your Productivity.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Make your notes with AI")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
