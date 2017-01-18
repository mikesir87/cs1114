FROM hairyhenderson/remarkjs

RUN sed -ie 's/index\.htm\;/index.htm\; try_files $uri \/index.html\;/' /etc/nginx/conf.d/default.conf && touch /slides.md