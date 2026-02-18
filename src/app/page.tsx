import HeroHome from "@/components/HomeComponent/HeroHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | World Store",
  description: "Home page of World Store",
};

const page = () => {
  return <HeroHome />;
};

export default page;
