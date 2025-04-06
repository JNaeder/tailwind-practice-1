import interior_pic from "./assets/interior_pics/interior_1.png";

export default function BlogCard() {
  return (
    <>
      <div className="w-96 bg-white rounded-2xl overflow-hidden shadow-sm">
        <img src={interior_pic} className="w-full h-80 object-cover" />
        <div className="p-4">
          <h1 className="bg-green-100 w-fit px-2 rounded-full border-green-600 border-1 text-green-600">
            Interior
          </h1>
          <h1 className="font-bold text-xl mt-2">
            Top 5 Living Room Inspirations
          </h1>
          <h1 className="mt-4 mb-4">
            Curated Vibrants colors for your living, make it pop & calm in the
            same time.
          </h1>
          <h1>Read more</h1>
        </div>
      </div>
    </>
  );
}
