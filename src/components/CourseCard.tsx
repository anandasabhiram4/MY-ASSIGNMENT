import React from 'react';

const CourseCard = () => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg p-6">
      <div className="flex-1">
        <img
          className="rounded-lg"
          src="https://cdn.motiondesign.school/uploads/2023/04/Blender-1.jpg"
          alt="Course"
        />
        <h2 className="text-xl font-bold mt-4">Blender 3D Fundamentals</h2>
        <p className="mt-2 text-gray-600">
          "Blender 3D Fundamentals" covers the basic concepts and tools in Blender, a popular open-source 3D modeling and animation software. This topic includes an introduction to the Blender interface, essential modeling techniques, basic texturing and shading, simple animation principles, and rendering processes. It aims to provide a solid foundation for creating and manipulating 3D objects and scenes.
        </p>
        <div className="flex space-x-4 mt-4">
          <div className="bg-blue-100 border border-gray-300 rounded-lg p-4 w-24 h-24 flex items-center justify-center">
            <p className="text-center text-gray-700">128 Lessons</p>
          </div>
          <div className="bg-green-100 border border-gray-300 rounded-lg p-4 w-24 h-24 flex items-center justify-center">
            <p className="text-center text-gray-700">56h 28 mins</p>
          </div>
          <div className="bg-yellow-100 border border-gray-300 rounded-lg p-4 w-24 h-24 flex items-center justify-center">
            <p className="text-center text-gray-700">Skill Level: Beginning</p>
          </div>
          <div className="bg-red-100 border border-gray-300 rounded-lg p-4 w-24 h-24 flex items-center justify-center">
            <p className="text-center text-gray-700">Views: 12,876</p>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="w-full md:w-64 bg-gray-200 p-4 ml-6 flex-shrink-0 rounded-lg">
        <h3 className="font-bold text-xl mb-2">Full Course</h3>
        <p className="text-lg font-bold text-gray-700">$15.99</p>
        <p className="text-sm text-gray-500 line-through">$30.00</p>
        <p className="text-sm text-red-500 font-semibold mt-2">60% OFF</p>
        <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-bold text-lg mb-2">Course Includes:</h4>
          <ul className="text-gray-700">
            <li className="mt-1">128 hrs material</li>
            <li className="mt-1">6 articles</li>
            <li className="mt-1">8 downloadable resources</li>
          </ul>
        </div>
        <div className="mt-6 bg-gray-100 p-4 rounded-lg border border-gray-300">
          <h4 className="font-bold text-lg mb-2">Publisher: Rayaan Curtis</h4>
          <p className="text-gray-700">
            Hey, I am Rayaan Curtis, a freelancer 3D artist with around 5 years of experience. I have a 4.8 instructor rating, 5957 reviews, and 29 courses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
