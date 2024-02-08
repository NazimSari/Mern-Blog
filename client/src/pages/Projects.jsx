import React from "react";
import CallToAction from "../components/CallToAction";
function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore
        enim, dolor magni quaerat dolores aut provident maxime iure, ratione
        fugit temporibus! Tenetur consectetur ab optio. Deserunt nam commodi
        dignissimos.
      </p>
      <CallToAction />
    </div>
  );
}

export default Projects;
