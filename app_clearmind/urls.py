from django.contrib import admin
from django.urls import path
from .views import ViewIndex, ViewSignUp, ViewSignin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ViewIndex, name='index'),
    path('signup', ViewSignUp, name='signup'),
    path('signin', ViewSignin, name='signin'),

]
