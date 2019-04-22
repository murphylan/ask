interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: '问答专区'
  },
  {
    name: '最新问答',
    url: '/ask/asklist',
    icon: 'icon-drop'
  },
  {
    name: '我要提问',
    url: '/ask/askform',
    icon: 'icon-drop'
  },
  {
    divider: true
  },
  {
    name: '日历',
    url: '/calendar',
    icon: 'icon-drop'
  },
];
