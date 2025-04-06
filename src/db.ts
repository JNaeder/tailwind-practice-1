import { User, Message } from "./types";
import profilePic1 from "./assets/profile_pics/profile_pic_1.png";
import profilePic2 from "./assets/profile_pics/profile_pic_2.png";
import profilePic3 from "./assets/profile_pics/profile_pic_3.png";

export const users: User[] = [
  { username: "Barry Bar", userHandle: "@barbar", userImage: profilePic1 },
  { username: "Sally Hams", userHandle: "@shams", userImage: profilePic3 },
  { username: "Tony McTony", userHandle: "@tonytony", userImage: profilePic2 },
];

const linkedinPosts = [
  "Just wrapped up an amazing product launch with the team. Proud of what we accomplished!",
  "Excited to share that I’ve accepted a new role as Software Engineer at [Company Name]. Grateful for the journey so far!",
  "Had a great time speaking at [Event Name] about the future of AI and its impact on design.",
  "Big thanks to my mentor and peers for helping me grow over the past year. Onward and upward!",
  "Closed a major deal today. Hard work and persistence really do pay off.",
  "Learning never stops! Just completed a certification in Google Cloud—highly recommend it.",
  "Celebrating 5 years at [Company Name] today. What a ride it’s been!",
  "Just returned from a team offsite—feeling inspired and ready to take on new challenges.",
  "Job hunting is no joke, but I’m staying optimistic and learning a lot along the way. If you know of any openings in UX design, let’s chat!",
  "Launched a side project I've been working on for months. Check it out and let me know what you think!",
];

export const messages: Message[] = [
  { user: users[0], message: linkedinPosts[0], date: "4/1/2025" },
  { user: users[0], message: linkedinPosts[1], date: "4/1/2025" },
  { user: users[1], message: linkedinPosts[2], date: "4/2/2025" },
  { user: users[2], message: linkedinPosts[3], date: "4/2/2025" },
  { user: users[2], message: linkedinPosts[4], date: "4/2/2025" },
  { user: users[2], message: linkedinPosts[5], date: "4/3/2025" },
  { user: users[0], message: linkedinPosts[6], date: "4/4/2025" },
  { user: users[2], message: linkedinPosts[7], date: "4/4/2025" },
  { user: users[0], message: linkedinPosts[8], date: "4/4/2025" },
  { user: users[1], message: linkedinPosts[9], date: "4/5/2025" },
];
