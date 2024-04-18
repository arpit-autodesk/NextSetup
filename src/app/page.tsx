import Link from "next/link";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
const imageURL = [
  "https://utfs.io/f/217bb56f-8fab-4af4-9922-e0f2e63e01e5-1d.jfif",
  "https://utfs.io/f/f5d3b9f5-bb5a-43e2-9cf7-3d85a00ed6ae-1e.jfif"
];

const imageList = imageURL.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts); 
  return (
    <main className="">
    <div className="flex flex-wrap gap-4">
      {
        posts.map(({ id, name }) => (
          <div key={id}>
       {id}.{name}
          </div>
        ))
      
      }{
        imageList.map(({ id, url }) => (
          <div key={id}>
              <img src={url} alt="" className="w-40 h-40 object-cover" />
              </div>
        ))
      }
    </div>
    </main>
  );
}
