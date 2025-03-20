"use client";
import { IPost, IPostContextType } from "@/utils/types";
import axios from "axios";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

const PostContext = createContext<IPostContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get<IPost[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(data);
        console.log("Response received:", data);

        if (data.length === 0) {
          console.warn("No posts found.");
        }
      } catch (error) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading, error }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

// export const usePosts = (): PostContextType =>{
//     const = useContext(PostContext);
//     if (!context){
//         throw new Error ('usePosts')
//     }
//     return context
// }
