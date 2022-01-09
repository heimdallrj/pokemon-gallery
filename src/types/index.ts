type Sprites = {
  front_default: string;
};

export interface IPokemon {
  name: string;
  url: string;
  sprites?: Sprites;
}
