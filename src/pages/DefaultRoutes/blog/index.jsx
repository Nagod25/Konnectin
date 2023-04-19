import { Outlet } from "react-router-dom";
import CTASection from "./cta";
import "./index.css";

function Blog() {
  return (
    <main className="bg-neutral-700">
      <section className="w-11/12 mx-auto max-w-screen-2xl flex flex-col gap-16">
        <Outlet />
        <CTASection />
      </section>
    </main>
  );
}

export default Blog;
