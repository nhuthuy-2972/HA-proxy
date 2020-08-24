import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/iot-dashboard",
    home: true,
  },
  {
    title: "Setup",
    icon: "settings-outline",
    children: [
      {
        title: "Email",
        link: "/setup/config/email",
        icon: "email-outline",
      },
      {
        title: "Notifications",
        link: "/setup/config/notify",
        icon: "bell-outline",
      },
      {
        title: "Proxy",
        link: "/setup/config/proxy",
        icon: "shuffle-2-outline",
      },
      {
        title: "Performance",
        link: "/setup/config/performance",
        icon: "activity-outline",
      },
      {
        title: "SSL Certificates",
        link: "/ssl/certificates",
        icon: "award-outline",
      },
      {
        title: "SSL Options",
        link: "/ssl/options",
        icon: "checkmark-circle-outline",
      },
      {
        title: "Let's Encrypt",
        link: "/ssl/letsencrypt",
        icon: "loader-outline",
      },
    ],
  },
  {
    title: "Load Balancer",
    icon: "sun-outline",
    link: "/pages/balancer",
    children: [
      {
        title: "Live Monitor",
        icon: "bar-chart-outline",
        link: "/balancer/create",
      },
      {
        title: "Groups",
        icon: "folder-outline",
        link: "/balancer/groups",
      },
      {
        title: "Frontends",
        icon: "log-in-outline",
        link: "/balancer/frontends",
      },
      {
        title: "Backends",
        icon: "log-out-outline",
        link: "/pages/balancer/backend",
      },
      {
        title: "ACL",
        icon: "edit-2-outline",
        link: "/balancer/acl",
      },
      {
        title: "Configuration",
        group: true,
      },
      {
        title: "Default Settings",
        icon: "file-remove-outline",
        link: "/balancer/default-settings",
      },
      {
        title: "Alert & Notices",
        icon: "alert-triangle-outline",
        link: "/balancer/alert-and-notices",
      },
      {
        title: "Performance Tunning",
        icon: "activity-outline",
        link: "/balancer/performacne-tunning",
      },
      {
        title: "Logging Options",
        icon: "list-outline",
        link: "/balancer/logging-options",
      },
      {
        title: "Backups",
        icon: "archive-outline",
        link: "/balancer/default-settings",
      },
      {
        title: "Default Settings",
        icon: "file-remove-outline",
        link: "/balancer/default-settings",
      },
      {
        title: "Adv. Configuration",
        group: true,
      },
      {
        title: "Resolvers",
        icon: "globe-outline",
        link: "/balancer/resolvers",
      },
      {
        title: "Lua Scripts",
        icon: "file-text-outline",
        link: "/balancer/lua-scripts",
      },
      {
        title: "Connection Logging Opt.",
        icon: "hard-drive-outline",
        link: "/balancer/connection-loggin-options",
      },
    ],
  },
  {
    title: "Cache",
    icon: "flash-outline",
    link: "/cache",
    home: false,
  },
  {
    title: "Reports",
    icon: "file-text-outline",
    link: "/reports",
    home: false,
  },
  {
    title: "Administrator",
    icon: "shield-outline",
    link: "/adminstrator",
    home: false,
  },
  {
    title: "Form Builder",
    icon: "edit-2-outline",
    link: "/form-builder",
    home: false,
  },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/iot-dashboard',
  // },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'Layout',
  //   icon: 'layout-outline',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/layout/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/layout/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/layout/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/layout/accordion',
  //     },
  //     {
  //       title: 'Tabs',
  //       pathMatch: 'prefix',
  //       link: '/layout/tabs',
  //     },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   icon: 'edit-2-outline',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/forms/datepicker',
  //     },
  //   ],
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'keypad-outline',
  //   link: '/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/ui-features/search-fields',
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Extra Components',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
