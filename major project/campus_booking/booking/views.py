from rest_framework import viewsets
from .models import Resource, Booking
from .serializers import ResourceSerializer, BookingSerializer

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count
from .models import Booking

@api_view(['GET'])
def analytics(request):
    data = Booking.objects.values('resource').annotate(total=Count('id'))
    return Response(data)







