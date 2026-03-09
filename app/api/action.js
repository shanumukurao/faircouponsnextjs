// app/lib/fetchListingData.js
"use server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchListingData(endpoint) {
  if (!endpoint) {
    return {
      error: true,
      message: "Endpoint is required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      next: { revalidate: 60 }, // Cache TTL
    });

    if (response.ok) {
      return await response.json(); // Only return data
    } else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData.message || "Request failed",
      };
    }
  } catch (error) {
    console.error("Error in fetchListingData:", error);
    return {
      error: true,
      message: "An unexpected error occurred",
    };
  }
}

export async function fetchProductsData(endpoint) {
  if (!endpoint) {
    return {
      error: true,
      message: "Endpoint is required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      next: { revalidate: 60 }, // Cache TTL
    });

    if (response.ok) {
      return await response.json(); // Only return data
    } else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData.message || "Request failed",
      };
    }
  } catch (error) {
    console.error("Error in fetchListingData:", error);
    return {
      error: true,
      message: "An unexpected error occurred",
    };
  }
}

export async function fetchBannersData(endpoint) {
  if (!endpoint) {
    return {
      error: true,
      message: "Endpoint is required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      next: { revalidate: 60 }, // Cache TTL
    });

    if (response.ok) {
      return await response.json(); // Only return data
    } else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData.message || "Request failed",
      };
    }
  } catch (error) {
    console.error("Error in fetchListingData:", error);
    return {
      error: true,
      message: "An unexpected error occurred",
    };
  }
}

export async function fetchCouponData(endpoint) {
  if (!endpoint) {
    return {
      error: true,
      message: "Endpoint is required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      next: { revalidate: 60 }, // Cache TTL
    });

    if (response.ok) {
      return await response.json(); // Only return data
    } else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData.message || "Request failed",
      };
    }
  } catch (error) {
    console.error("Error in fetchListingData:", error);
    return {
      error: true,
      message: "An unexpected error occurred",
    };
  }
}

export async function fetchCategoryData(endpoint) {
  if (!endpoint) {
    return {
      error: true,
      message: "Endpoint is required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      next: { revalidate: 60 }, // Cache TTL
    });

    if (response.ok) {
      return await response.json(); // Only return data
    } else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData.message || "Request failed",
      };
    }
  } catch (error) {
    console.error("Error in fetchListingData:", error);
    return {
      error: true,
      message: "An unexpected error occurred",
    };
  }
}

export async function fetchProductListingData(endpoint) {
  if (!endpoint) {
    return {
      error: true,
      message: "Endpoint is required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      next: { revalidate: 60 }, // Cache TTL
    });

    if (response.ok) {
      return await response.json(); // Only return data
    } else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData.message || "Request failed",
      };
    }
  } catch (error) {
    console.error("Error in fetchListingData:", error);
    return {
      error: true,
      message: "An unexpected error occurred",
    };
  }
}

// export async function fetchSingleListingById(endpoint) {
//   if (!endpoint) {
//     return {
//       error: true,
//       message: "Endpoint is required",
//     };
//   }

//   try {
//     const response = await fetch(`${BASE_URL}/${endpoint}`, {
//       method: "GET",
//       next: { revalidate: 60 }, // Cache TTL
//     });

//     if (response.ok) {
//       return await response.json(); // Only return data
//     } else {
//       const errorData = await response.json();
//       return {
//         error: true,
//         message: errorData.message || "Request failed",
//       };
//     }
//   } catch (error) {
//     console.error("Error in fetchListingData:", error);
//     return {
//       error: true,
//       message: "An unexpected error occurred",
//     };
//   }
// }

export async function fetchSingleListingById(endpoint) {
  if (!endpoint) {
    return {
      error: true,
      message: "Endpoint is required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      next: { revalidate: 60 }, // Cache TTL
    });

    const contentType = response.headers.get("content-type");
    const hasBody = contentType && contentType.includes("application/json");

    if (response.ok) {
      return hasBody ? await response.json() : {};
    } else {
      const errorData = hasBody ? await response.json() : {};
      return {
        error: true,
        message:
          errorData?.message || `Request failed with status ${response.status}`,
      };
    }
  } catch (error) {
    console.error("Error in fetchListingData:", error);
    return {
      error: true,
      message: "An unexpected error occurred",
    };
  }
}

export async function fetchListingDataById(endpoint) {
  if (!endpoint) {
    return {
      error: true,
      message: "Endpoint is required",
    };
  }
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      next: { revalidate: 60 }, // Cache TTL
    });

    const text = await response.text(); // Get raw response first

    if (!text) {
      return {
        error: true,
        message: "Empty response from server",
      };
    }

    const json = JSON.parse(text); // Now safely parse
    if (response.ok) {
      return json;
    } else {
      return {
        error: true,
        message: json.message || "Request failed",
      };
    }

    // if (response.ok) {
    //   return await response.json(); // Only return data
    // } else {
    //   const errorData = await response.json();
    //   return {
    //     error: true,
    //     message: errorData.message || "Request failed",
    //   };
    // }
  } catch (error) {
    console.error("Error in fetchListingData:", error);
    return {
      error: true,
      message: "An unexpected error occurred",
    };
  }
}
export async function postDataToEndpoint(endpoint, data) {
  if (!endpoint || !data) {
    return {
      error: true,
      message: "Both endpoint and data are required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      next: { revalidate: 60 }, // Optional: no cache for POST
    });
    if (response.ok) {
      return await response.json();
    } else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData.message || "POST request failed",
      };
    }
  } catch (error) {
    console.error("Error in postDataToEndpoint:", error);
    return {
      error: true,
      message: "An unexpected error occurred during POST",
    };
  }
}

export async function fetchSettingsData(endpoint) {
  if (!endpoint) {
    return {
      error: true,
      message: "Endpoint is required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/global/all`, {
      method: "GET",
      next: { revalidate: 60 }, // Cache TTL
    });

    if (response.ok) {
      return await response.json(); // Only return data
    } else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData.message || "Request failed",
      };
    }
  } catch (error) {
    console.error("Error in fetchListingData:", error);
    return {
      error: true,
      message: "An unexpected error occurred",
    };
  }
}
