import Menu from "./Menu";
import BlogCard from "./BlogCard";

function App() {
  return (
    <>
      <Menu />
      <div className="flex flex-col items-center mt-10">
        <BlogCard />
      </div>
    </>
  );
}

export default App;
