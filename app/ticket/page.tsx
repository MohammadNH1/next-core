import { getPost } from "@/action/api";
export const dynamic = "force-dynamic"; 

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
