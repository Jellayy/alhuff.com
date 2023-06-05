FROM httpd:latest
COPY ./public-html/ /usr/local/apache2/htdocs/
RUN echo "ServerName localhost" | tee -a /usr/local/apache2/conf/httpd.conf