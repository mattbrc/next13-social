export const dynamic = "force-static";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About NextSpace",
};

export default async function About() {
  return (
    <main>
      <div className="p-4">
        <h1 className="mb-4 text-4xl font-bold">About</h1>
        <p>We are social</p>
      </div>
    </main>
  );
}
