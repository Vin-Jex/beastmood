import {
  BookmarkBorderOutlined,
  FormatListBulletedOutlined,
  HistoryOutlined,
  Logout,
  Message,
  Settings,
} from "@mui/icons-material";

export const browserItems: {
  genres: { text: string }[];
  genres2: { text: string }[];
} = {
  genres: [
    {
      text: "actions",
    },
    {
      text: "adventure",
    },
    {
      text: "cars",
    },
    {
      text: "comedy",
    },
    {
      text: "dementia",
    },
    {
      text: "demons",
    },
    {
      text: "drama",
    },
    {
      text: "ecchi",
    },
    {
      text: "fantasy",
    },
    {
      text: "game",
    },
    {
      text: "harem",
    },
    {
      text: "historical",
    },

    {
      text: "horror",
    },
    {
      text: "isekai",
    },
  ],
  genres2: [
    {
      text: "josei",
    },
    {
      text: "kids",
    },
    {
      text: "magic",
    },
    {
      text: "martial arts",
    },
    {
      text: "mecha",
    },
    {
      text: "military",
    },
    {
      text: "music",
    },
    {
      text: "mystery",
    },
    {
      text: "perody",
    },
    {
      text: "police",
    },
    {
      text: "christian",
    },
    {
      text: "toon",
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
