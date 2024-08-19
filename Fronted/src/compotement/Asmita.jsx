import React from "react";

const MeetAsmita = () => {
  const senior = {
    name: "Asmita Singh",
    department: "Information Technology",
    year: "Final Year",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Asmita ki profile image URL
  };

  return (
    <>
    {/* <div className="py-10 bg-gray-100">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={senior.image}
          alt={senior.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">
            {senior.name}
          </h3>
          <p className="text-gray-600">{senior.department}</p>
          <p className="text-gray-600">{senior.year}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
         Asmita Singh
          </button>
        </div>
      </div>
    </div> */}
    <div className="py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center p-6">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Asita Singh"
              className="w-24 h-24 rounded-full mr-6"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Asita Singh</h3>
              <p className="text-gray-600">Image Processing Expert</p>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Advice for Juniors
            </h4>
            <p className="text-gray-700">
              "Agar aap image processing ya coding me interest rakhte hain, to
              consistently practice karna aur latest tools aur techniques se
              updated rehna bohot zaroori hai. Start with the basics of image
              processing, jaise image filtering, edge detection, and
              transformation. Python aur MATLAB jaise tools is field me kaafi
              useful hain. Build projects that challenge you, aur apni learning
              ko practical implementations me apply karein."
            </p>
            <p className="text-gray-700 mt-4">
              "Ek aur important cheez ye hai ki apne basics ko strong karein. Yeh
              aapko complex algorithms aur techniques samajhne me madad karega.
              Additionally, GitHub par apne projects ko showcase karein aur open
              source contributions ke through apni skills ko enhance karein."
            </p>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Learn More from Asita
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MeetAsmita;
