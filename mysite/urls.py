"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from views import *
admin.autodiscover()
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$',eat),
    url(r'^login/$',login),
    url(r'^register/$',register),
    url(r'^main$',main),
    url(r'^aboutus$',aboutus),
    url(r'^search$',search),
    url(r'^search2$',search2),
    url(r'^alltag$', alltag),
    url(r'^tagsearchstore$', tag_search_store),
    url(r'^createlist$', createlist),
    url(r'^searchlist$', searchlist),
]

