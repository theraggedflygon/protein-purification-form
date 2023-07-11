import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benzymes | Protein Purification Paperwork Processor",
  description:
    "A helpful tool from Benzymes to speed up protein purification paperwork.",
};

export default function Home() {
  return (
    <div className="bg-white">
      <div className="text-center">
        Ben's Protein Purification Paperwork Processor
      </div>
      <div>Project Name:</div>
    </div>
  );
}
