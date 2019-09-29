import React from 'react';

import {TextGroup, WomanImage, Shape1, Image1, Image2, Shape2, Shape3, Shape4} from "./home-elements";

export default function Home() {
  return (
    <section id="home_container">
      <TextGroup/>
      <div className="image-shapes-group">
        <WomanImage/>
        <Shape1/>
        <Image1/>
        <Image2/>
        <Shape2/>
        <Shape3/>
        <Shape4/>
      </div>
    </section>
  )
};
