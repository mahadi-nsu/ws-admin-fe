export const mainSubMenuList = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    url: '/dashboard',
  },
  {
    key: 'daily-report',
    label: 'Daily Report',
    url: '/daily-report',
  },
  {
    key: 'transport',
    label: 'Transport',
    url: '/transport',
  },
];

export const eventsSubMenuList = [
  {
    key: 'general',
    label: 'General',
    url: '/events/general',
  },
  {
    key: 'Transport',
    label: 'Transport',
    url: '/events/transport',
  },
  {
    key: 'events/access-control',
    label: 'Access Control',
    url: '/events/access-control',
  },
  {
    key: 'events/others',
    label: 'Others',
    url: '/events/others',
  },
];

export const billingSubMenuList = [
  {
    key: 'billing/services',
    label: 'Services',
    url: '/billing/services',
  },
  {
    key: 'billing/acc-companies',
    label: 'Accounting Companies',
    url: '/billing/invoiced-companies',
  },
  {
    key: 'billing/companies',
    label: 'Companies',
    url: '/billing/companies',
  },
  {
    key: 'billing/documents',
    label: 'Documents',
    url: '/billing/documents',
  },
  {
    key: 'billing/review',
    label: 'Review',
    url: '/billing/reviews',
  },
  {
    key: 'billing/billing',
    label: 'Billing',
    url: '/billing/billing',
  },
  {
    key: 'billing/invoices',
    label: 'Invoices',
    url: '/billing/invoices',
  },
  {
    key: 'billing/configuration',
    label: 'Configuration',
    url: '/billing/configuration',
    disableLink: true,
    children: [
      {
        key: 'billing/configuration_1',
        label: 'Countries Regions Sectors',
        url: '/billing/configuration/crs',
      },
      {
        key: 'billing/configuration_2',
        label: 'Customer Sources Sales Person',
        url: '/billing/configuration/cs',
      },
      {
        key: 'billing/configuration_3',
        label: 'Services Configurator',
        url: '/billing/configuration/sc',
      },
      {
        key: 'billing/bss-goal',
        label: 'BSS Goal',
        url: '/billing/configuration/bss-goal',
      },
      {
        key: 'billing/doc-template',
        label: 'Document Template',
        url: '/billing/configuration/doc-template',
      },
      {
        key: 'billing/notifications',
        label: 'Notifications',
        url: '/billing/configuration/notifications',
      },
    ],
  },
];
export const serviceDeskSubMenuList = [
  {
    key: 'service-desk/new',
    label: 'New ticket',
    url: '/service-desk/new',
  },
  {
    key: 'service-desk/reports',
    label: 'Reports',
    url: '/service-desk/reports',
  },
  {
    key: 'service-desk/reopened',
    label: 'Reopened',
    url: '/service-desk/reopened',
  },
  {
    key: 'service-desk/settings',
    label: 'Settings',
    url: '/service-desk/settings',
    disableLink: true,
    children: [
      {
        key: 'service-desk/ticketTypes',
        label: 'Ticket types',
        url: '/service-desk/ticketTypes',
      },
      {
        key: 'service-desk/ticketLevels',
        label: 'Ticket levels',
        url: '/service-desk/ticketLevels',
      },
      {
        key: 'service-desk/reasonClosing',
        label: 'Reason for closing',
        url: '/service-desk/reasonClosing',
      },
      {
        key: 'service-desk/relations',
        label: 'Assignments',
        url: '/service-desk/relations',
      },
      {
        key: 'service-desk/supervisors',
        label: 'Supervisors',
        url: '/service-desk/supervisors',
      },
    ],
  },
];

export const devicesSubMenuList = [
  {
    key: 'devices',
    label: 'Overview',
    url: '/devices',
  },
  {
    key: 'devices/repair',
    label: 'Repair Journal',
    url: '/devices/repair',
  },
  {
    key: 'devices/metrology',
    label: 'Metrology, certificates',
    url: '/devices/metrology',
  },
  {
    key: 'devices/logs',
    label: 'Devices Logs',
    url: '/devices/logs',
  },
  {
    key: 'devices/diagnostic',
    label: 'Measurment Diagnostic',
    url: '/devices/diagnostic',
  },
  {
    key: 'devices/map',
    label: 'Map',
    url: '/devices/map',
  },
  {
    key: 'devices/servicecode',
    label: 'Service Code',
    url: '/devices/servicecode',
  },
];
export const maintenanceSubMenuList = [
  {
    key: 'UnrecognisedPhotos',
    label: 'Unrecognised employees photo gallery',
    url: '/maintenance',
  },
  {
    key: 'maintenance/comparison',
    label: 'Comparison of measurement results',
    url: '/maintenance/comparison',
  },
];
export const partnersettingsSubMenuList = [
  {
    key: 'partnersettings',
    label: 'Holidays',
    url: '/partnersettings',
  },
  {
    key: 'partnersettings/notifications',
    label: 'Notifications',
    url: '/partnersettings/notifications',
  },
  {
    key: 'partnersettings/servicelevel',
    label: 'Service level agreement',
    url: '/partnersettings/servicelevel',
  },
  {
    key: 'partnersettings/apiacc',
    label: 'Api account',
    url: '/partnersettings/apiacc',
  },
  {
    key: 'partnersettings/contact',
    label: 'Contact information',
    url: '/partnersettings/contact',
  },
];

export const accountMenuList = [
  {
    key: '/accounts/partner-accounts',
    label: 'Partner Accounts',
    url: '/accounts/partner-accounts',
  },
  {
    key: '/accounts/company-accounts',
    label: 'Company Accounts',
    url: '/accounts/company-accounts',
  },
  {
    key: '/accounts/manager-accounts',
    label: 'Manager Accounts',
    url: '/accounts/manager-accounts',
  },
];
