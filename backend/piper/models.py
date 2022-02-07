from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    image_url = models.CharField(max_length=255)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'image_url': self.image_url
        }


class Locations(models.Model):
    name = models.CharField(max_length=200)
    street = models.CharField(max_length=100)
    state = models.CharField(max_length=20)
    zip_code = models.IntegerField()
    lat = models.IntegerField(default=0, null=False)
    lng = models.IntegerField(default=0, null=False)
    verified = models.BooleanField(default=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'street': self.street,
            'state': self.state,
            'zip_code': self.zip_code,
            'lat': self.lat,
            'long': self.long,
            'verified': self.verified
        }


class Saved(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    location_id = models.ForeignKey(Locations, on_delete=models.CASCADE)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'location_id': self.location_id
        }
