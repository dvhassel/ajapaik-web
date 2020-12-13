#!/bin/bash

# TODO: Finish
# while ! nc -z postgres 5432; do sleep 3; done

cd /home/docker/ajapaik && python manage.py migrate --noinput \
  && python manage.py loaddata licence object_detection_models \
  && python manage.py update_index && python manage.py compilemessages && \
  python manage.py runserver 0.0.0.0:8000
