// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const pins = [175001, 177501, 938232];
  res.status(200).json(pins);
}
