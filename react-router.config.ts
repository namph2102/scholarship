import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // specific paths
  prerender: ["/", "/home"],

  // async function for dependencies like a CMS
  // async prerender({ getStaticPaths }) {
  //   let posts = await fakeGetPostsFromCMS();
  //   return [
  //     "/",
  //     "/blog",
  //     ...posts.map((post) => post.href),
  //   ];
  // },
} satisfies Config;
