from django.http import HttpResponse
from django.http import JsonResponse
from django import template
from django.template.loader import get_template
from django.shortcuts import render_to_response
from django.template.loader import render_to_string
from mysite.models import *
from django.template.context_processors import csrf
import json
def searchlist(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("searchlist.html", c)

def createlist(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("createlist.html", c)

def search2(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("searchstore.html", c)

def search(request):
    c = {}
    c.update(csrf(request))
    return render_to_response("search.html", c)

def eat(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("index.html", c)

def main(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("main.html", c)

def aboutus(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("aboutus.html", c)

def login(request):
	if request.method == 'POST':
		response_data = {}
		try:
			user = Users.objects.get(username = request.POST.get('accountnumber') , password = request.POST.get('password'))
		except:
			user = None
		if user:
			response_data['exist'] = True
			response = JsonResponse(response_data)
			response.set_cookie('account',request.POST.get('accountnumber'))
		else:
			response_data['exist'] = False
			response = JsonResponse(response_data)
		return response

def register(request):
	if request.method == 'POST':
		response_data = {}
		try:
			user = Users.objects.get(username = request.POST.get('accountnumber'))
		except:
			user = None
		if user:
			response_data['exist'] = True
			response = JsonResponse(response_data)
		else:
			user = Users(username = request.POST.get('accountnumber') , password = request.POST.get('password') , email = request.POST.get('email'))
			user.save()
			response_data['exist'] = False
			response = JsonResponse(response_data)
			response.set_cookie('account',request.POST.get('accountnumber'))
		return response

def checkcookie(request):
	response_data = {}
	if 'account' in request.COOKIES:
		response_data['exist'] = True;
		response_data['account'] = request.COOKIES['account'];
	else:
		response_data['exist'] = False;
	return JsonResponse(response_data)





def alltag(request):
    tags = Tags.objects.all()
    
    # TODO: define a get_tag_details function, if needed.
    result = []
    for tag in tags:
        tag_info = dict()
        tag_info['id'] = tag.id
        tag_info['name'] = tag.name
        tag_info['description'] = tag.description
        result.append(tag_info)
    
    return HttpResponse(json.dumps(result))


def get_store_details(store):
    store_info = dict()
    store_info['name'] = store.name
    store_info['description'] = store.description
    
    # TODO: store_info['good'] = store.good 
    # TODO: store_info['bad'] = store.bad
    # When like, dislike is updated, we need to update store.good, store.bad
    # in database. With this method, it reduces times of computation. 
    store_info['good'] = len(store.storelike_set.all())
    store_info['bad'] = len(store.storedislike_set.all())
    store_info['address'] = store.location
    store_info['fans_page'] = store.fan_page
    store_info['website'] = store.website
    return store_info


def tag_search_store(request):

    
    if request.method == 'POST':
        taglist = request.POST.get('taglist')

        # If there is no any tag in search list
        # return all stores
        stores = Stores.objects
        if len(taglist) == 0:
            stores = stores.all()
        else:
            taglist = taglist.split(',')
            for tag_id in taglist:
                stores = stores.filter(tags=int(tag_id))
        
        # If there is no any store left, after filtering.
        # return response '' , which represent ZERO LENGTH data.
        if (len(stores)) == 0:
            return HttpResponse('')

        stores_details = []
        for store in stores:
            store_info = get_store_details(store)
            stores_details.append(store_info)
        
        return HttpResponse(json.dumps(stores_details))
