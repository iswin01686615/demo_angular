export interface IUserInfo {
    id?: number;
    name: string;
    age: string;
    nationality: string;
}

export interface Colab{
  id?: number;
  title: string;
  content: string;
}

export interface Tab{
  id?: number;
  title: string;
  content: Colab[];
}
