import Image from "next/image";

export function MovieCast() {
  return (
    <div className="mt-20 mb-20">
      <h1 className="text-2xl font-bold">Original Cast</h1>
      <div className="flex gap-6 mt-8">
        <div className="flex flex-col bg-white p-2 drop-shadow-lg">
          <Image
            width={176}
            height={224}
            src={`https://image.tmdb.org/t/p/original/wrVoBR5YhdEcadqwPICkcXXTbWk.jpg`}
            alt=""
          />
          <strong className="mt-4 mb-2">Ryan Reinolds</strong>
          <span>Wade Wilson / Deadpool</span>
        </div>
      </div>
    </div>
  );
}
