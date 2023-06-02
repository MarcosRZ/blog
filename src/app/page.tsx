
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const revalidate = 0;

export default async function Home() {

  const supabase = createServerComponentClient({ cookies });

  const { data: posts = [] } = await supabase.from('posts').select('id, slug, title');

  return (
    <>
      <h1>This is home page</h1>
      {posts ? posts.map(post => <Link key={post.id} href={`/post/${post.slug}`}>{post.title}</Link>) : <p>no posts</p>}
    </>
  )
}

