
export enum routes {
  home,
  contact,
  projects,
  login 
}

export const routesPaths: {[key in keyof typeof routes]:  {name: string, path: string}} = {
  home: {name: 'Home', path: '/'},
  contact: {name: 'Contact', path: '/contact'},
  projects: {name: 'Projects', path: '/projects'},
  login: {name: 'Login', path: '/login'},
}

