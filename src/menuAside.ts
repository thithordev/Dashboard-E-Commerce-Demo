import {
    mdiAccountCircle,
    mdiMonitor,
    mdiGithub,
    mdiLock,
    mdiViewList,
  } from '@mdi/js'
  
  export default [
    {
      to: '/dashboard',
      icon: mdiMonitor,
      label: 'Dashboard'
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    },
    {
      to: '/',
      label: 'Login',
      icon: mdiLock
    },
    {
      label: 'Dropdown',
      icon: mdiViewList,
      menu: [
        {
          label: 'Item One'
        },
        {
          label: 'Item Two'
        }
      ]
    },
    {
      href: 'https://github.com/thithordev/Dashboard-E-Commerce-Demo',
      label: 'GitHub',
      icon: mdiGithub,
      target: '_blank'
    }
  ]