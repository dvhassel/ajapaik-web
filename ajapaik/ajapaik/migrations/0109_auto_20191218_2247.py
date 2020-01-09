# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-12-18 20:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ajapaik', '0108_auto_20190930_0016'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='postcard_back_of',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='postcard_back', to='ajapaik.Photo'),
        ),
        migrations.AddField(
            model_name='photo',
            name='postcard_front_of',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='postcard_front', to='ajapaik.Photo'),
        )
    ]