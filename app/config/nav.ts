import type { MainNavItem, MobileNavItem } from '~/types/nav';

interface NavConfig {
  mainNav: Array<MainNavItem>;
  mobileNav: Array<MobileNavItem>;
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      to: '/direct-admission',
      title: 'Direct Admission',
    },
    {
      to: '/about-us',
      title: 'About Us',
    },
    {
      to: '/contact-us',
      title: 'Contact Us',
    },
  ],
  mobileNav: [
    {
      title: 'Consultation',
      items: [
        {
          to: '/engineering-admission',
          title: 'Engineering Admission',
        },
        {
          to: '/management-admission',
          title: 'Management Admission',
        },
        {
          to: '/medical-admission',
          title: 'Medical Admission',
        },
      ],
    },
  ],
};
