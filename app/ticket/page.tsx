const getPost = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const response = await fetch("https://dummyjson.com/posts?limit=10", {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Error fetching ticket!");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
const page = async () => {
  const data = await getPost();
  console.log("data", data);

  return (
    <div>
      <h1>Ticket page</h1>
    </div>
  );
};

export default page;
