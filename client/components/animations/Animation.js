"use client"
import { useLottie, useLottieInteractivity } from "lottie-react";
import diplome from "../../public/diplome.json"

// const style = {
//   height: 300,
 
//   borderStyle: "solid",
//   borderRadius: 7,
// };


const Example = ({animation}) => {
  const lottieObj = useLottie({
    animationData: animation,
  });
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.4, 0.9],
        type: "play",
        frames: [0, 38],
      },
    ],
  });

  return Animation;
};

export default Example;