import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

export const getPosts = async () => {
  const supabase = createClientComponentClient();
  const { data: posts } = await supabase.from('posts').select();
  return posts as Post[];
}