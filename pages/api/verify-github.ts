import type { NextApiRequest, NextApiResponse } from "next";
import { gql } from "@apollo/client";
import { apollo } from "../../utils/apollo";

type Data = {
  isVerified: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { organization, repository } = req.body;

  try {
    await apollo.query({
      query: gql`
        {
          organization(login: "${organization}") {
            repository(name: "${repository}") {
              id
              url
            }
          }
        }`,
    });

    res
      .status(200)
      .json({ isVerified: true, message: "Github repository verified" });
  } catch (error) {
    res.status(200).json({
      isVerified: false,
      message: "Github repository doesn't exist or is set to private",
    });
  }
}
