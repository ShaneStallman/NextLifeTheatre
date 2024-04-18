export type pageNavigation = {
    setPage: (String) => void;
  };

export type teamMember = {
    name: string;
    headshot: string;
    bio: string;
    socials: string;
    role: string;
    roletype: string;
};

export type jobPost = {
  name: string;
  image: string;
  roles: string[];
  description: string;
  form: string;
};

export type picture = {
  src: string;
  alt: string;
  caption: string;
  link: string;
};

export type show = {
  name: string;
  director: string;
  choreo: string;
  inspiration: string;
  image: string;
  location: string;
  date: string;
}