import React from "react";
import {
  FooterCompoment,
  HeaderCompoment,
  MostPopularCompoment,
  SpecilalOfferCompoment,
} from "../../components/pages/home/app";

export default function Home() {
  return (
    <React.Fragment>
      <div className="padding">
        <HeaderCompoment />

        <SpecilalOfferCompoment />

        <MostPopularCompoment />
      </div>

      <FooterCompoment />
    </React.Fragment>
  );
}
