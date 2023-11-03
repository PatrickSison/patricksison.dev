import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <>
      <h2>blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <li
            key={post.filePath}
            className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
          >
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
              className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4 "
            >
              <div>
                <h2 className="">{post.data.title}</h2>
                {post.data.date && (
                  <span className="mb-3 font-bold opacity-60 no-underline">
                    {post.data.date}
                  </span>
                )}
              </div>
              {post.data.description && (
                <p className="mt-3 text-lg opacity-60 no-underline">
                  {post.data.description}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
