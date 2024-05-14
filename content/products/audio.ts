import { Product } from "../types";
import { ring } from './lineas/ring';
import { infinit } from './lineas/infinit';
import { party } from './lineas/party';
import { flama } from './lineas/flama';
import { waterproof } from './lineas/waterproof';

export const audio: Product[] = [
  ...ring,
  ...infinit,
  ...party,
  ...waterproof,
  ...flama,
];
