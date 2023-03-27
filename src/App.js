import Landing from "./components/Landing";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [image , setImage] = useState(null)

  const handleImage = (e)=>{

    setImage(URL.createObjectURL( e.target.files[0]))
  }


  return (
    <div className="bg-[rgb(36,36,36)]">
      <Routes>
        <Route path="/" element={<Landing image={image} handleImage={handleImage} />} />
        <Route path="/details" element={<Details  image={image} />} />
      </Routes>
    </div>
  );
}

export default App;
