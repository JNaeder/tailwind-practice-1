import Card from "./Card";
import Menu from "./Menu";
import { messages } from "./db";
import { Message } from "./types";

function App() {
  return (
    <>
      <Menu />
      <div className="grid grid-cols-1 lg:grid-cols-3 w-8/10 mx-auto gap-5 mt-10">
        {messages.map((message: Message) => (
          <Card user={message.user} message={message} />
        ))}
      </div>
    </>
  );
}

export default App;
