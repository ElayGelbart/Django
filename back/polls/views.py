# Create your views here.
from django.http import HttpResponse

def index(request):
  return HttpResponse("this is check")

def check(request):
  return HttpResponse("<b>check page</b>")
