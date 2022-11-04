import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { MovieCast } from "../../../components/MovieCast";
import { MovieDetails } from "../../../components/MovieDetails";

export default function Movie() {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const callApi = async () => {
      const response = await axios(
        "https://api.themoviedb.org/3/movie/663712?api_key=6b121c5159d8b0bbc6a63fc1bb6f3fe0&language=en-US"
      );
      setMovieDetails(response.data);
    };
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      <div className="px-28 pb-96">
        <MovieCast />

        <div>
          <div className="text-2xl font-bold">Trailer</div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
