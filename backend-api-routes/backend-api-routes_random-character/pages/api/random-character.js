import Chance from "chance";

const chance = new Chance();

export default function Handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    profession: chance.profession(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };

  res.status(200).json(character);
}
