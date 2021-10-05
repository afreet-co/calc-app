export type ThemeSchema = {
  mainBackground: string;
  otherBackground: string;
  switch: string;
  buttonSchema3: string;
  buttonSchema2: string;
  buttonSchema1: string;
  screen: string;
  header: string;
  switchText: string;
};

export const themes: ThemeSchema[] = [
  {
    mainBackground: "bg-background-main-1",
    otherBackground: "bg-background-other-1",
    switch: "bg-key-bg-3-1",
    buttonSchema1: `bg-key-bg-1-1 border-key-shadow-1-1 text-text-dark-1`,
    buttonSchema2: `bg-key-bg-2-1 border-key-shadow-2-1 text-text-white-1`,
    buttonSchema3: `bg-key-bg-3-1 border-key-shadow-3-1 text-text-white-1`,
    screen: `bg-background-screen-1 text-text-white-1`,
    header: `text-text-white-1`,
    switchText: "text-text-white-1",
  },
  {
    mainBackground: "bg-background-main-2",
    otherBackground: "bg-background-other-2",
    switch: "bg-key-bg-3-2",
    buttonSchema1: `bg-key-bg-1-2 border-key-shadow-1-2 text-text-dark-2`,
    buttonSchema2: `bg-key-bg-2-2 border-key-shadow-2-2 text-text-white-2`,
    buttonSchema3: `bg-key-bg-3-2 border-key-shadow-3-2 text-text-white-2`,
    screen: `bg-background-screen-2 text-text-dark-2`,
    header: "text-text-dark-2",
    switchText: "text-text-dark-2",
  },
  {
    mainBackground: "bg-background-main-3",
    otherBackground: "bg-background-other-3",
    switch: "bg-key-bg-3-3",
    buttonSchema1: `bg-key-bg-1-3 border-key-shadow-1-3 text-text-yellow-3`,
    buttonSchema2: `bg-key-bg-2-3 border-key-shadow-2-3 text-text-white-3`,
    buttonSchema3: `bg-key-bg-3-3 border-key-shadow-3-3 text-text-dark-3`,
    screen: `bg-background-screen-3 text-text-yellow-3`,
    header: `text-text-yellow-3`,
    switchText: `text-text-yellow-3`,
  },
];
