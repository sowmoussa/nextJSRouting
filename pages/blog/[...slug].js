import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <section>
      <h1>BlogPostsPage</h1>
    </section>
  );
}

export default BlogPostsPage;
