import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Admissions from "@/pages/Admissions";
import ContactUs from "@/pages/ContactUs";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "admissions", Component: Admissions },
      { path: "contact", Component: ContactUs },
      { path: "courses", Component: Courses },
      { path: "courses/:slug", Component: CourseDetail },
    ],
  },
]);
