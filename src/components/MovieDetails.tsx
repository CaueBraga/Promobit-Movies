import Image from "next/image";

export function MovieDetails({ movieDetails }: any) {
  return (
    <div className="bg-purple-900 text-white flex pt-20 px-28 flex-1 h-fit justify-center items-center">
      <div className="flex-1 flex gap-8 mb-[-48px]">
        <Image
          className="rounded-lg drop-shadow-2xl"
          width={383}
          height={474}
          src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
          alt=""
        />
        <div className="max-w-2xl">
          <strong>{movieDetails.title}</strong>
          <span>{movieDetails.release_date}</span>
          <div>
            <span>{`  • ${movieDetails.runtime}`}</span>
            <div>
              <h2 className="font-bold text-xl">Synopsis</h2>
              <p className="pt-2">{movieDetails.overview}</p>
            </div>
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="mr-20">
                <strong className="block">Rob Liefeld</strong>
                <span>Characters</span>
              </div>
              <div className="mr-20">
                <strong className="block">Rob Liefeld</strong>
                <span>Characters</span>
              </div>
              <div className="mr-20">
                <strong className="block">Rob Liefeld</strong>
                <span>Characters</span>
              </div>
              <div className="mr-20">
                <strong className="block">Rob Liefeld</strong>
                <span>Characters</span>
              </div>
              <div className="mr-20">
                <strong className="block">Rob Liefeld</strong>
                <span>Characters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
