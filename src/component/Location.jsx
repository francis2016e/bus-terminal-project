import { useState, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = ({ name, location, description}) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <>

    
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative  h-96 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer m-7 w-full "
    >
      {visible && (
        <div
          className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
          style={{
            top: position.y - 120,
            left: position.x - 120,
          }}
        />
      )}

      <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
        <FaMapMarkerAlt className="text-red-500 text-5xl" />

        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {name}
        </h2>

        <p className="text-sm text-indigo-500 font-medium mb-4">
          {location}
        </p>

        <p className="text-sm text-gray-500 mb-4 px-4">
          {description}
        </p>
      </div>
    </div>
    
    </>
    
  );
};

export default Location;
