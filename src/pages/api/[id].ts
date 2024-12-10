import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  result?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { id } = req.query;
    const result = await import(`../data/${id}`);
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: "failed to fetch data" });
  }
}
