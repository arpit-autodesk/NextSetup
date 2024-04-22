import { getImage } from "~/server/queries";

export default async function PhotoModal({
    params: { id: photoId },
  }: {
    params: { id: string };
  }) {
    const image = await getImage(parseInt(photoId));  
    return <div>{photoId}</div>;
  }