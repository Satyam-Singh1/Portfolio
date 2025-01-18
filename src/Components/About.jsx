import React from "react";

export default function About() {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from bg-gray-800  to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          asperiores excepturi odit, in officiis eum vitae dolorem aperiam odio?
          Ipsam, facilis nemo molestias deserunt animi sed rerum qui. Sapiente,
          eius.
        </p>
        <br />
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          facilis dolore veritatis nihil temporibus, consequuntur illum,
          exercitationem suscipit, ad laudantium obcaecati tenetur iusto
          placeat! Perspiciatis itaque reprehenderit voluptatem hic!
          Perspiciatis, dolor et soluta ducimus rerum dolorem velit molestiae
          fugit explicabo voluptate veniam eligendi accusamus animi magni?
          Reprehenderit ab nisi iusto!
        </div>
      </div>
    </div>
  );
}
