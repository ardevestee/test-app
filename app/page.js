import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const HeavyHero = dynamic(() => import("../components/_Hero/Hero"));
const Advantage = dynamic(() => import("../components/_Advantages/Advantages"));
const Products = dynamic(() => import("../components/_OurProducts/Products"));
const WhyEstee = dynamic(() => import("../components/_WhyEstee/WhyEstee"));
const Team = dynamic(() => import("../components/_Team/Team"));
const Testimonials = dynamic(() => import("../components/_Testimonials/Testimonials"));
const ConttactV2 = dynamic(() => import("../components/_ContactV2/ContactV2"));
const News = dynamic(() => import("../components/_News/News"));
const Footer = dynamic(() => import("../components/_Footer/Footer"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <HeavyHero />
        <Advantage />
        <Products />
        <WhyEstee />
        <Team />
        <Testimonials />
        <ConttactV2 />
        <News />
        <Footer />
        <Toaster />
      </Suspense>
    </>
  );
}
