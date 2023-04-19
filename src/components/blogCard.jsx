import { Link } from "react-router-dom";

function BlogCard({
  article: { image, publishedAt, source, title, publisher, timeFrame },
}) {
  return (
    <div className="blog-card overflow-hidden rounded-md text-xs h-full flex flex-col justify-between">
      <div className="bg-neutral-1000 overflow-hidden">
        <img
          className="w-full hover:scale-105 transistion-all duration-300"
          src={image}
          alt={title}
        />
      </div>

      <div className="bg-white px-3 py-4 flex flex-col justify-between gap-3">
        <hgroup>
          <Link to={`/blog/career/${title.split(" ").join("-")}`}>
            <h2>{title}</h2>
          </Link>
          <h3 className="mt-1">{publisher}</h3>
        </hgroup>
        <div className="flex items-center justify-between w-full text-neutral-400 text-xs">
          <span>{timeFrame}</span>
          <span>{publishedAt}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
