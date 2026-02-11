// app/blogs/[slug]/page.jsx
import { fetchListingDataById, fetchProductsData } from "@/app/api/action";
import BlogPages from "../../../Components/Home/BlogPages";
import { notFound } from "next/navigation";

async function getBlogDetails(slug) {
  return await fetchListingDataById(`blogs/blog/${slug}`);
}

async function getAllBlogs() {
  return await fetchProductsData(`blogs`);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [blog, blogs] = await Promise.all([
    getBlogDetails(slug),
    getAllBlogs(),
  ]);

  if (!blog || blog.blogStatus !== "show") {
    return notFound();
  }

  return <BlogPages blog={blog} blogs={blogs} />;
}
