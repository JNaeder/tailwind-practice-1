import { User, Message } from "./types";

export default function Card({
  user,
  message,
}: {
  user: User;
  message: Message;
}) {
  return (
    <>
      <div className="bg-neutral-100 p-5 rounded-2xl shadow-lg w-120 mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex items-start mb-2">
            <img
              src={user.userImage}
              className="size-20 rounded-full border-2 border-white"
            />
            <div className="ml-2">
              <h1 className="text-2xl font-bold">{user.username}</h1>
              <h3 className="text-md font-thin">{user.userHandle}</h3>
            </div>
          </div>
          <h1>{message.date}</h1>
        </div>
        <h1>{message.message}</h1>
      </div>
    </>
  );
}
