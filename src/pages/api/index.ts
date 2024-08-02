// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ComposerActionFormResponse | ComposerActionMetadata>,
) {
  if (req.method === 'POST') {
    console.log(req);

    res.status(200).json({ 
      type: 'form',
      title: 'dTech.vision',
      url: 'https://composer-kr8o.vercel.app/', // make sure this is your public URL e.g. http://localhost:3000 for local testing
    });
  } else if (req.method === 'GET') {
    res.status(200).json({
        "type": "composer",
        "name": "Create Poll",
        "icon": "checkbox", // supported list: https://docs.farcaster.xyz/reference/actions/spec#valid-icons
        "description": "Create a poll frame",
        "aboutUrl": "https://banyan.social/index.html",
        "imageUrl": "https://i.imgur.com/dAanHbf.png",
        "action": {
          "type": "post",
        }
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
