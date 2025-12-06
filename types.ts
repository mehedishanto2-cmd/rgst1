
export interface Game {
  id: number;
  title: string;
  description: string;
  price: number;
  coverImage: string;
  genre: string;
  platform: string;
  releaseDate: string;
  screenshots: string[];
}

export interface CartItem {
  game: Game;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}
