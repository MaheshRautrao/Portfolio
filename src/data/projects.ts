import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    id: "1",
    projectTitle: "Meeting Room Booking System",
    projectDescription:
      "Developed a system to streamline meeting room bookings and automate attendance tracking. Previously, employees had to manually fill out a form when entering and exiting meeting rooms, leading to inefficiencies in productivity tracking. This system integrates meeting room scheduling with automated time tracking, ensuring accurate records for HR and audits.",
    projectCoverImageLink:
      "/projectImages/meeting-room-booking-system/cover-image.png",
    tags: [
      { name: "Next.js" },
      { name: "Backend" },
      { name: "API" },
      { name: "Frontend" },
      { name: "Fullstack Project" },
    ],
    githubLink: "https://github.com/MaheshRautrao/Meeting-room-booking-system",
    liveLink: "https://meeting-room-booking-system-chi.vercel.app/meetings",
    images: [
      {
        src: "/projectImages/meeting-room-booking-system/cover-image.png",
        alt: "project-image",
      },
      {
        src: "/projectImages/meeting-room-booking-system/user.png",
        alt: "project-image",
      },
      {
        src: "/projectImages/meeting-room-booking-system/meeting-room.png",
        alt: "project-image",
      },
      {
        src: "/projectImages/meeting-room-booking-system/meeting-room-add.png",
        alt: "project-image",
      },
      {
        src: "/projectImages/meeting-room-booking-system/user-add.png",
        alt: "project-image",
      },
      {
        src: "/projectImages/meeting-room-booking-system/meeting-add1.png",
        alt: "project-image",
      },
      {
        src: "/projectImages/meeting-room-booking-system/meeting-add2.png",
        alt: "project-image",
      },
      {
        src: "/projectImages/meeting-room-booking-system/meeting-add3.png",
        alt: "project-image",
      },
      {
        src: "/projectImages/meeting-room-booking-system/meeting-add4.png",
        alt: "project-image",
      },
    ],
    features: [
      { feature: "Automated attendance tracking for meeting rooms" },
      { feature: "Admins can manage users and meeting rooms" },
      { feature: "Employees can book meeting rooms with time slots" },
      { feature: "HR can audit meeting room usage with accurate logs" },
    ],
  },
];
