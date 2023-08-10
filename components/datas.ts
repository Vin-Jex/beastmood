import {
  BookmarkBorderOutlined,
  FormatListBulletedOutlined,
  HistoryOutlined,
  Logout,
  Message,
  Settings,
} from "@mui/icons-material";

export const browserItems: {
  genres: { text: string, link: string}[];
  genres2: { text: string, link: string}[];
} = {
  genres: [
    {
      text: "actions",
      link: "/"
    },
    {
      text: "adventure",
      link: "/"
    },
    {
      text: "cars",
      link: "/"
    },
    {
      text: "comedy",
      link: "/"
    },
    {
      text: "dementia",
      link: "/"
    },
    {
      text: "demons",
      link: "/"
    },
    {
      text: "drama",
      link: "/"
    },
    {
      text: "ecchi",
      link: "/"
    },
    {
      text: "fantasy",
      link: "/"
    },
    {
      text: "game",
      link: "/"
    },
    {
      text: "harem",
      link: "/"
    },
    {
      text: "historical",
      link: "/"
    },

    {
      text: "horror",
      link: "/"
    },
    {
      text: "isekai",
      link: "/"
    },
  ],
  genres2: [
    {
      text: "josei",
      link: "/"
    },
    {
      text: "kids",
      link: "/"
    },
    {
      text: "magic",
      link: "/"
    },
    {
      text: "martial arts",
      link: "/"
    },
    {
      text: "mecha",
      link: "/"
    },
    {
      text: "military",
      link: "/"
    },
    {
      text: "music",
      link: "/"
    },
    {
      text: "mystery",
      link: "/"
    },
    {
      text: "perody",
      link: "/"
    },
    {
      text: "police",
      link: "/"
    },
    {
      text: "christian",
      link: "/"
    },
    {
      text: "toon",
      link: "/"
    },
  ],
};

export const navItems = [
  {
    text: "home",
  },
  {
    text: "blog",
  },
  {
    text: "anime",
  },
  {
    text: "community",
  },
];

export const DesktopAccountMenuData = [
  {
    icon: BookmarkBorderOutlined,
    text: "favourite",
  },
  {
    icon: FormatListBulletedOutlined,
    text: "my list",
  },
  {
    icon: HistoryOutlined,
    text: "history",
  },
  {
    icon: Message,
    text: "notifications",
  },
  {
    icon: Settings,
    text: "my account",
  },
  {
    icon: Logout,
    text: "logout",
  },
];
