from rest_framework import serializers
from .models import Order, OrderProduct
from products.models import Product
from products.serializers import ProductSerializer

class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProduct
        fields = ('id', 'quantity', 'products')
        depth = 1

class OrderSerializer(serializers.ModelSerializer):
    OrderProduct = OrderProductSerializer(many=True, read_only=True)
    class Meta:
        model = Order
        fields = ('id', 'user','OrderProduct',
                  'dateOrdered', 'firstName', 'lastName', 'city',
                  'address1', 'address2', 'zipCode', 'contactNum')
        # depth = 2

    def create(self, validated_data):
        # user = self.data.get('user')
        request = self.context['request']
        orderProducts = request.data.get('orderProducts')
        order = Order.objects.create(**validated_data)
        for product in orderProducts:
            quantity = product['quantity']
            products = Product.objects.get(id=product['products'])
            OrderProduct.objects.create(order=order, quantity=quantity, products=products)
        return order

    # OrderProduct = OrderProductSerializer(many=True, read_only=True)
    #
    # class Meta:
    #     model = Order
    #     fields = ('id', 'user', 'OrderProduct')
    #     # depth = 2
    #
    # def create(self, validated_data):
    #     # user = self.data.get('user')
    #     request = self.context['request']
    #     orderProducts = request.data.get('orderProducts')
    #     order = Order.objects.create(**validated_data)
    #     for product in orderProducts:
    #         quantity = product['quantity']
    #         products = Product.objects.get(id=product['products'])
    #         OrderProduct.objects.create(order=order, quantity=quantity, products=products)
    #     return order