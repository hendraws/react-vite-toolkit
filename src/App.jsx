import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import { Container } from "@chakra-ui/react";
function App() {
  return (
    <div className="p-10 bg-gray-100 w-full">
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
