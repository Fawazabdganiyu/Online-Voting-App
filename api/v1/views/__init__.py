#!/usr/bin/env python3
"""
This module contains the Blueprint for the app
"""
from flask import Blueprint

ovs_elect = Blueprint('ovs_elect', __name__, url_prefix='/api/v1')
from api.v1.views.index import *