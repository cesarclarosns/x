import {
  EyeClosedIcon,
  EyeOpenIcon,
  GitHubLogoIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircledIcon
} from "@radix-ui/react-icons"
import {
  ArrowLeftIcon,
  BadgeCheckIcon,
  BadgeDollarSignIcon,
  Bell,
  BellDot,
  BellIcon,
  BookmarkIcon,
  CircleEllipsisIcon,
  HeartIcon,
  Home,
  ImageIcon,
  ListFilter,
  Loader2,
  MessageCircleIcon,
  MessageSquare,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  PlusIcon,
  PlusSquareIcon,
  Search,
  SendHorizonalIcon,
  Star,
  StarIcon,
  User,
  Users,
  UsersIcon,
  VideoIcon,
  XIcon
} from "lucide-react"

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  Spinner: Loader2,
  GitHubLogoIcon,
  Google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  QuestionMarkCircledIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  MessageSquare,
  Bell,
  User,
  Users,
  Home,
  HomeIcon,
  ArrowLeftIcon,
  Search,
  MagnifyingGlassIcon,
  ListFilter,
  BadgeCheckIcon,
  SendHorizonalIcon,
  ImageIcon,
  GifIcon: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props} fill="none">
      <path
        fill="currentColor"
        d="M18.75,3.50054297 C20.5449254,3.50054297 22,4.95561754 22,6.75054297 L22,17.2531195 C22,19.048045 20.5449254,20.5031195 18.75,20.5031195 L5.25,20.5031195 C3.45507456,20.5031195 2,19.048045 2,17.2531195 L2,6.75054297 C2,4.95561754 3.45507456,3.50054297 5.25,3.50054297 L18.75,3.50054297 Z M18.75,5.00054297 L5.25,5.00054297 C4.28350169,5.00054297 3.5,5.78404466 3.5,6.75054297 L3.5,17.2531195 C3.5,18.2196178 4.28350169,19.0031195 5.25,19.0031195 L18.75,19.0031195 C19.7164983,19.0031195 20.5,18.2196178 20.5,17.2531195 L20.5,6.75054297 C20.5,5.78404466 19.7164983,5.00054297 18.75,5.00054297 Z M8.01459972,8.87193666 C8.61149825,8.87193666 9.03352891,8.95326234 9.51677386,9.18532686 C9.82793289,9.33475204 9.95904407,9.70812933 9.80961888,10.0192884 C9.6601937,10.3304474 9.28681641,10.4615586 8.97565738,10.3121334 C8.67582824,10.1681491 8.43601415,10.1219367 8.01459972,10.1219367 C7.14788947,10.1219367 6.51103525,10.9182985 6.51103525,11.9943017 C6.51103525,13.0713011 7.14873038,13.8702789 8.01459972,13.8702789 C8.44322427,13.8702789 8.80607251,13.6904125 8.99484486,13.3695045 L9.001,13.354543 L9.001,12.620543 L8.62521827,12.6211937 C8.31142012,12.6211937 8.05163513,12.3899359 8.00699487,12.0885517 L8.00021827,11.9961937 C8.00021827,11.6823956 8.23147615,11.4226106 8.53286035,11.3779703 L8.62521827,11.3711937 L9.62682145,11.3711937 C9.94061961,11.3711937 10.2004046,11.6024516 10.2450448,11.9038358 L10.2518215,11.9961937 L10.2504852,13.5438774 L10.2504852,13.5438774 L10.2441303,13.5991827 L10.2441303,13.5991827 L10.2229651,13.6890602 L10.2229651,13.6890602 L10.2024697,13.7442077 C9.82606539,14.6343365 8.96156448,15.1202789 8.01459972,15.1202789 C6.38857781,15.1202789 5.26103525,13.707564 5.26103525,11.9943017 C5.26103525,10.2816525 6.38839145,8.87193666 8.01459972,8.87193666 Z M12.6289445,8.99393497 C12.9427427,8.99393497 13.2025276,9.22519285 13.2471679,9.52657705 L13.2539445,9.61893497 L13.2539445,14.381065 C13.2539445,14.726243 12.9741225,15.006065 12.6289445,15.006065 C12.3151463,15.006065 12.0553614,14.7748072 12.0107211,14.4734229 L12.0039445,14.381065 L12.0039445,9.61893497 C12.0039445,9.273757 12.2837665,8.99393497 12.6289445,8.99393497 Z M15.6247564,8.99393489 L17.6221579,9.00083497 C17.9673338,9.00202673 18.246188,9.28281321 18.2450039,9.62798912 C18.2439132,9.94178541 18.0117595,10.2007704 17.7102229,10.2443727 L17.6178421,10.2508313 L16.247,10.245543 L16.247,11.999543 L17.37,12.0004012 C17.6837982,12.0004012 17.9435831,12.2316591 17.9882234,12.5330433 L17.995,12.6254012 C17.995,12.9391993 17.7637421,13.1989843 17.4623579,13.2436246 L17.37,13.2504012 L16.247,13.249543 L16.2475985,14.3649711 C16.2475985,14.6787693 16.0163406,14.9385543 15.7149564,14.9831945 L15.6225985,14.9899711 C15.3088003,14.9899711 15.0490154,14.7587133 15.0043751,14.4573291 L14.9975984,14.3649711 L14.9975984,9.61677709 C14.9986853,9.30298081 15.230839,9.04399582 15.5323756,9.00039353 L15.6247564,8.99393489 Z"
      ></path>
    </svg>
  ),
  BadgeDollarSignIcon,
  CircleEllipsisIcon,
  PlusSquareIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  MessageCircleIcon,
  HeartIcon,
  BookmarkIcon,
  PlusIcon,
  XIcon,
  BellDot,
  StarIcon,
  VideoIcon
}
