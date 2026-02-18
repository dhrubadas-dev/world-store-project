import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | World Store",
  description: "About page of World Store",
};

const page = () => {
  return <section className="grid h-[90dvh] place-items-center"></section>;
};

export default page;
