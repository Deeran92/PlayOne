import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Work from "./component/Work";
import Services from "./component/Services";
import Service from "./component/Service";
import Blog from "./component/Blog";
import Contact from "./component/Contact";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Work" element={<Work />} />
        <Route path="Services" element={<Services />} />
        <Route path="Service" element={<Service />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}
export default Root;
