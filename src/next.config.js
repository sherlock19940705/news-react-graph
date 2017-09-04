module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/news': { page: '/' },
      '/active': { page: '/active' },
      '/ask': { page: '/ask' },
      '/best': { page: '/best' },
      '/bestcomments': { page: '/bestcomments' },
      '/bookmarklet': { page: '/bookmarklet' },
      '/dmca': { page: '/dmca' },
      '/formatdoc': { page: '/formatdoc' },
      '/front': { page: '/front' },
      '/item': { page: '/item' },
      '/jobs': { page: '/jobs' },
      '/leaders': { page: '/leaders' },
      '/lists': { page: '/lists' },
      '/login': { page: '/login' },
      '/newcomments': { page: '/newcomments' },
      '/newest': { page: '/newest' },
      '/newpoll': { page: '/newpoll' },
      '/newsfaq': { page: '/newsfaq' },
      '/newsguidelines': { page: '/newsguidelines' },
      '/newswelcome': { page: '/newswelcome' },
      '/noobcomments': { page: '/noobcomments' },
      '/security': { page: '/security' },
      '/show': { page: '/show' },
      '/submit': { page: '/submit' },
      '/threads': { page: '/threads' },

  //     '/p/975': { page: '/post', query: { id: '975' } },
  //     '/p/481': { page: '/post', query: { id: '481' } },
    };
  },
  // Optional property to set the path where Next runs, requires more config
  // distDir: './src/.next',
  // distDir: '../build/.next',
};
