# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-12-29 13:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ajapaik', '0112_auto_20191227_1246'),
    ]

    operations = [
        migrations.CreateModel(
            name='TranscriptionFeedback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(db_index=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transcription_feedback', to='ajapaik.Profile')),
            ],
        ),
    ]