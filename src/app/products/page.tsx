import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | World Store",
  description: "Products page of World Store",
};

const page = () => {
  return <section className="grid h-[90dvh] place-items-center"></section>;
};

export default page;
