/* eslint-disable no-unused-vars */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import pincodes from '@/pincode.json'

export default function handler(req, res) {
  console.log(pincodes);
  res.status(200).json(pincodes);
}
