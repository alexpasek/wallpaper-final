import { notFound } from "next/navigation";

import MississaugaBlogPage from "@/components/MississaugaBlogPage";
import {
  MISSISSAUGA_BLOG_POSTS,
  getMississaugaBlogPost,
} from "@/data/mississaugaBathroomCluster";

export function generateStaticParams() {
  return Object.keys(MISSISSAUGA_BLOG_POSTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getMississaugaBlogPost(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: post.path },
    robots: { index: true, follow: true },
  };
}

export default function Page({ params }) {
  const post = getMississaugaBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <MississaugaBlogPage post={post} />;
}
