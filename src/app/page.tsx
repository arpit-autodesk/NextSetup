import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";
const imageURL = [
  "https://utfs.io/f/217bb56f-8fab-4af4-9922-e0f2e63e01e5-1d.jfif",
  "https://utfs.io/f/f5d3b9f5-bb5a-43e2-9cf7-3d85a00ed6ae-1e.jfif"
];

const imageList = imageURL.map((url, index) => ({
  id: index + 1,
  url,
}));

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl ">
          Please sign in above.
        </div>
      </SignedOut>
      <SignedIn>
    <div className="flex flex-wrap gap-4">
      <Images/>
      {/* {
        imageList.map(({ id, url }) => (
          <div key={id}>
              <img src={url} alt="" className="w-40 h-40 object-cover" />
              </div>
        ))
      } */}


    </div>
    </SignedIn>
    </main>
  );
}
