export interface NavItem {
  to: string;
  title: string;
}

export type NavItemArray = Array<NavItem>;

export type MainNavItem = NavItem;
export interface MobileNavItem extends Omit<NavItem, "to"> {
  items: Array<NavItem>;
}
