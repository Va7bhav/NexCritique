/* eslint-disable no-unused-vars */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let pincodes = {
    '175001': ["Mandi", "Himachal Pradesh"],
    '177501': ["Hamirpur", "Himachal Pradesh"],
  }
  res.status(200).json(pincodes);
}
