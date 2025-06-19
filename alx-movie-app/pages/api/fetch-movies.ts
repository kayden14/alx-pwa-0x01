import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { year, page, genre } = req.body;
    const currentYear = new Date().getFullYear();

    const url = `https://moviesdatabase.p.rapidapi.com/titles?year=${year || currentYear}&sort=year.decr&limit=12&page=${page}${genre ? `&genre=${genre}` : ''}`;

    const response = await fetch(url, {
      headers: {
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
        "x-rapidapi-key": process.env.MOVIE_API_KEY as string,
      },
    });

    if (!response.ok) return res.status(500).json({ error: "Failed to fetch movies" });

    const data = await response.json();
    const movies: MoviesProps[] = data.results;

    return res.status(200).json({ movies });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
