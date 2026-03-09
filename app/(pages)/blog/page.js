import { fetchListingData } from "../../api/action";
import Blogs from "../../Components/blogsPage/blogs";
import React from "react";

export default async function Page() {
  const data = await fetchListingData("blogs");

  if (data?.error) {
    return (
      <div className="container mx-auto py-10 text-center text-red-600">
        {data.message || "Failed to load blogs"}
      </div>
    );
  }

  return <Blogs blogsData={data || []} />;
}
