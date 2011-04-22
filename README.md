# Pure SSL

I'm making a directory of Pure SSL sites, that are unfiresheepable, and
the techniques they employ.

# HTTPSNow

After starting this I found another directory called [HTTPSnow](https://httpsnow.org/). It's much larger and has some good questions.

# Current Sites

* [Convore](http://convore.com/)
* [github](http://github.com/)
* [Django CMS](http://django-cms.org/)
* [Django SHOP](http://django-shop.org/)
* [SecretSocial](http://shh.sh/)
* [Gondor](http://gondor.io)

# Adding a site

To add a site, fork the repo, edit sites.js, copy an example, and edit
it. After that, commit it, push it, and send a pull request. I'll run
build.js while merging it. Or, optionally, you may run build.js before
sending the pull request.

# Rules for inclusion

* All pages at the domain are HTTPS. Browsing to the HTTP page will
  redirect even unauthenticated users to the HTTPS page. Subdomains
  can be non-HTTPS, but if non-HTTPS subdomains use session cookies,
  the site shall not be included in this directory.
* No passwords or session cookies can be sent in plain text.
* No browser warnings: if users can embed HTTP images, they should be
  proxied to an HTTPS server.

# Tags

## High Traffic

Traffic is high enough that lesser site owners would complain about the
CPU costs.

## Image Proxy

This is for sites that allow users to embed images.
[GitHub](http://github.com/) and [Convore](http://convore.com/) both
change references to external HTTP-only images to references to internal
HTTPS images. Most browsers show a warning when an HTTPS page contains
HTTP content and an image proxy keeps this warning from appearing.

## Public Content

Content that can be viewed without being logged in is transmitted via
HTTPS to people who aren't logged in. This prevents eavesdropping of
*what* people are looking at on public wifi networks.

# License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
