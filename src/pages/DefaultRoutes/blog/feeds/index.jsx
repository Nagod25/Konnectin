import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeroSection from "../hero";
import { newBlogData, trendingBlogData } from "./data";
import Feed from "./feed";

function Feeds() {
  const feedList = [
    { name: "All articles", link: "all" },
    { name: "Career", link: "career" },
    { name: "Start ups", link: "start_up" },
    { name: "soft skills", link: "soft_skills" },
  ];

  const [newBlogs, setNewBlogs] = useState([]);
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  let params = useParams();

  useEffect(() => {
    let newBlog = newBlogData[params.feed];
    let trendingBlog = trendingBlogData[params.feed];
    setNewBlogs(newBlog);
    setTrendingBlogs(trendingBlog);
  }, [params]);

  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 text-sm sm:text-md sm:gap-8 items-center">
          {feedList.map((feedItem, index) => (
            <Link
              key={index}
              to={`/blog/${feedItem.link}`}
              className={
                params.feed === feedItem.link
                  ? "border-b-2 border-secondary-600 capitalize"
                  : "text-neutral-200 capitalize"
              }
            >
              {feedItem.name}
            </Link>
          ))}
        </div>
        <Feed
          newBlogs={newBlogs}
          trendingBlogs={trendingBlogs}
          gridNumber={9}
        />
      </div>
    </>
  );
}

export default Feeds;
