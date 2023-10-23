from django.shortcuts import render

# Create your views here.

def ViewIndex(request):
    return render(request, 'index.html')

def ViewSignUp(request):
    return render(request, 'signup.html')

def ViewSignin(request):
    return render(request, 'signin.html')