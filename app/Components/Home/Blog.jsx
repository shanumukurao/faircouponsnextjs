import React from "react";
import styles from "@/scss/pages/blogPage.module.scss";
import Image from "next/image";
import Link from "next/link";

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL || "";

export default function Blogs({ blogsData }) {
  return (
    <>
      <section className={styles.blogs} id="blogs">
        <div className="container py-3">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-8">
              {blogsData
                .filter((blog) => blog.blogStatus === "show")
                .slice(0, 2)
                .map((blog) => (
                  <div className={styles.blogLeft} key={blog._id}>
                    <p className="py-3">
                      <span>RELATED BLOG</span>
                    </p>
                    <img
                      className=""
                      src={`${IMG_URL}${blog.blogImage}`}
                      alt="Blog Image"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                    <h4 className="text-center mt-4">{blog.title.en}</h4>
                    <p className="text-center">{blog.description}</p>
                    <div className="d-flex justify-content-center">
                      <Link
                        className={` ${styles.readMore}`}
                        href={`/blog/${blog.slug}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
            </div>

            <div className="col-sm-12 col-md-5 col-lg-4">
              <div className={styles.blogRight}>
                <h4 className="text-center py-2">
                  <span>Top Articles</span>
                </h4>

                {blogsData
                  .filter((blog) => blog.blogStatus === "show")
                  .slice(0, 4)
                  .map((blog, index) => (
                    <div
                      key={index}
                      className={`row ${styles.blogDetails} py-2`}
                    >
                      <div className="col-4 d-flex align-items-center justify-content-center">
                        <img
                          className=""
                          src={`${IMG_URL}${blog.blogImage}`}
                          alt="Blog Image"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>
                      <div className="col-8">
                        <h6>
                          <span>{blog.title.en}</span>
                        </h6>
                        <p>{blog.description}</p>
                        <Link
                          className={` ${styles.readMore}`}
                          href={`/blog/${blog.slug}`}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bottomBlogs} id="bottom-blogs">
        <div className="container py-3">
          <div className="row">
            <h3 className="py-2">Related Blogs</h3>

            {blogsData
              .filter((blog) => blog.blogStatus === "show")
              .slice(0, 3)
              .map((blog, index) => (
                <div key={index} className="col-sm-12 col-md-4 col-lg-4">
                  <div className={styles.bottomBlogItem}>
                    <img
                      className="w-100"
                      src={`${IMG_URL}${blog.blogImage}`}
                      alt={blog.title.en}
                      width={400}
                      height={300}
                    />
                    <h6 className="p-2">{blog.title.en}</h6>

                    <p className="px-2">{blog.description}</p>
                    <Link
                      className={` ${styles.readMore}`}
                      href={`/blog/${blog.slug}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
