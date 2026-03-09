// app/blogs/[slug]/page.jsx
import { fetchListingDataById, fetchProductsData } from "../../../lib/db";
import BlogDetails from "../../../Components/blogDetails/BlogDetails";
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

  return <BlogDetails blog={blog} blogs={blogs} />;
}
