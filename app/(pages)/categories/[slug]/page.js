import React from "react";
import {
  fetchCategoryData,
  fetchListingData,
  fetchListingDataById,
  fetchProductsData,
  fetchSingleListingById,
} from "@/app/api/action";
import CategoryDetails from "@/components/categoryDetails/CategoryDetails";
import { notFound } from "next/navigation";

async function loadStoreData(slug) {
  return await fetchListingDataById(`category/slug/${slug}`);
}

function isHidden(item) {
  const status = item?.categoryStatus || item?.status;
  return typeof status === "string" && status.toLowerCase() === "hide";
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  // const categoryData = await fetchListingDataById(`category/slug/${slug}`);
  const categoryData = await loadStoreData(slug);

  if (!categoryData || !categoryData._id || isHidden(categoryData)) {
    notFound();
  }
  // Extract localized metadata with fallbacks
  const metaTitle =
    categoryData?.pageTitle?.en ||
    `${categoryData?.title?.en} Coupons & Promo Codes`;

  const metaDescription =
    categoryData?.metaDescription?.en ||
    `Get the best ${categoryData?.title?.en} coupons, promo codes, and deals. Save money with our verified offers.`;

  const metaKeywords =
    categoryData?.metaKeywords?.en ||
    `${categoryData?.title?.en} coupons, ${categoryData?.title?.en} promo codes, ${categoryData?.title?.en} deals, ${categoryData?.title?.en} discounts`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  // const categoryData = await fetchListingDataById(`category/slug/${slug}`);
  const categoryData = await loadStoreData(slug);

  if (!categoryData || !categoryData._id || isHidden(categoryData)) {
    notFound();
  }

  const id = categoryData._id;
  const similarStoresData = await fetchProductsData(
    `productsDuplicate?category=${id}&page=1&limit=6`
  );
  // Get all product IDs
  const productIds = similarStoresData?.products?.map((item) => item._id) || [];

  const couponDataArray = (
    await Promise.all(
      productIds.map((pid) =>
        fetchListingDataById(`couponDuplicate/store?storeId=${pid}`)
      )
    )
  ).flatMap((res) => res?.data || []);
  const randomCategoriesData = await fetchCategoryData(
    "category/limit?isPopularStatus=show&page=1&limit=10"
  );
  const homeCategory = randomCategoriesData.find(
    (cat) => cat.title?.en === "Home"
  );

  const randomCategories = homeCategory?.children?.length
    ? [...homeCategory.children].sort(() => 0.5 - Math.random()).slice(0, 6)
    : [];

  return (
    <CategoryDetails
      productCategoryId={id}
      coupons={couponDataArray || []}
      storeData={categoryData || []}
      similarStoresDataItems={similarStoresData?.products || []}
      randomCategories={randomCategories || []}
    />
  );
}
