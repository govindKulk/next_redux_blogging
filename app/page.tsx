/* Components */
import { Suspense } from "react";
import { Counter } from "./components/Counter/Counter";
import PostList from "./components/Posts/PostList";
import Loading from "./components/Posts/loading";

export default function IndexPage() {
  return (
  <Suspense fallback={<Loading/>}>

    <PostList/>
  </Suspense>)
}

export const metadata = {
  title: "Redux Toolkit",
};
