// NewsCard.jsx
export default function NewsCard({ post }) {
  if (!post) {
    return null;
  }

  return (
    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        {post.imageUrl && (
          <img
            alt={post.title}
            src={post.imageUrl}
            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
          />
        )}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-left">
            <a href={post.href}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600 text-left">{post.description}</p>
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
          {/* Additional post details can go here */}
        </div>
      </div>
    </article>
  );
}
