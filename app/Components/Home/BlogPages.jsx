"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/scss/pages/blogDetails.module.scss";
import Link from "next/link";

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL || "";

export default function BlogPages({ blog, blogs }) {
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className={`container ${styles.blog_details_sec}`}>
      <div className="row">
        <div className="col-lg-8">
          <div className={styles.blog_details}>
            <img
              src={`${IMG_URL}${blog.blogImage}`}
              alt="Blog cover"
              className={styles.blog_detail_img}
              height={0}
              width={0}
              sizes="100vw"
            />
            <h1 className={styles.blog_details_title}>{blog.title.en}</h1>
            <ul className="d-flex flex-row gap-md-5">
              <li>By {blog.author}</li>
              {/* You can include views/comments if available in future */}
            </ul>
            <p>{blog.description}</p>

            {/* Render content HTML */}
            <div
              className={styles.blog_content}
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />
          </div>
        </div>

        {/* ✅ Static Right Section */}
        <div className="col-lg-4">
          <div className={styles.blog_right_sec}>
            <h4 className={styles.more_posts_head}>More Posts</h4>
            {blogs
              ?.filter((b) => b._id !== blog._id && b.blogStatus === "show")
              .slice(0, 4)
              .map((item) => (
                <Link
                  href={`/blog/${item.slug}`}
                  key={item._id}
                  className={`row ${styles.more_posts}`}
                >
                  <div className="col-4 py-2">
                    <img
                      src={`${IMG_URL}${item.blogImage}`}
                      className={styles.blog_detail_img}
                      height={0}
                      width={0}
                      sizes="100vw"
                      alt={item.title.en}
                    />
                  </div>
                  <div className="col-8 py-2">
                    <h5>{item.title.en}</h5>
                    <p>{new Date(item.createdAt).toLocaleDateString()}</p>
                  </div>
                </Link>
              ))}
            <Link href={"/blog"} className={styles.see_all_btn}>
              See All
            </Link>
          </div>

          <div className={styles.popular_tag_sec}>
            <h5 className={styles.more_posts_head}>Popular Tags</h5>
            <div className={styles.coupons_tags}>
              <ul>
                <li>Coupons</li>
                <li>Flash Sale</li>
                <li>Exclusive</li>
                <li>Best Offer</li>
                <li>Trending</li>
                <li>Discount</li>
                <li>Hot Deal</li>
                <li>Best Offer</li>
              </ul>
            </div>
            <Link href={""} className={styles.see_all_btn}>
              See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
