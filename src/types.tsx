export type User = {
  username: string;
  userHandle: string;
  userImage: string;
};

export type Message = {
  user: User;
  message: string;
  date: string;
};
