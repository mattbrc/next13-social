interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  // deduped
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

<div className="p-4">
  <h1 className="mb-4 text-4xl font-bold">About</h1>
  <p>We are social</p>
</div>;
