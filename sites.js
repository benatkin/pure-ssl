// Sites that are purely SSL. Written in JS and outputted to JSON so
// comments can be included.
//
// To be included, sites must redirect from http to https and not embed
// any images or scripts that are served over http (this triggers
// warnings in some browsers).

exports.sites = {
  convore: {
    name: "Convore",
    url: "http://convore.com/",
    tags: {
      "image proxy": 1,
    }
  },
  github: {
    name: "github",
    url: "http://github.com/",
    tags: {
      "high traffic": 1,
      "image proxy": 1,
      "public content": 1
    },
    note: "GitHub Pages sites, which are on subdomains and do not share cookies with github.com, are not served with HTTPS."
  },
  "django-cms": {
    name: "Django CMS",
    url: "http://django-cms.org/"
  },
  "django-shop": {
    name: "Django SHOP",
    url: "http://django-shop.org/"
  },
  "secret-social": {
    name: "SecretSocial",
    url: "http://shh.sh/"
  },
  gondor: {
      name: "Gondor",
      url: "http://gondor.io"
  }
}
