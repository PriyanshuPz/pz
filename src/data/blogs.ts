export type Blog = {
  title: string;
  url: string;
  image: string;
  publishdate: string;
};

export async function fetchBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(
      "https://dev.to/api/articles?username=priyanshuverma&per_page=50"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data = await res.json();
    return data.map((blog: any) => ({
      title: blog.title,
      url: blog.url,
      image: blog.social_image || "https://via.placeholder.com/150",
      publishdate: new Date(blog.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
