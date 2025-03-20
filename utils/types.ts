// Define the Post type for TypeScript
export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface IPostContextType {
  posts: IPost[];
  loading: boolean;
  error: string | null;
}
