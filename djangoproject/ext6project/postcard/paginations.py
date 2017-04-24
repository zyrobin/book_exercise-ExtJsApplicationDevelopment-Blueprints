from rest_framework.pagination import LimitOffsetPagination

class ExtJsStartLimitPagination(LimitOffsetPagination):
    default_limit = 25
    limit_query_param  = 'limit'
    offset_query_param = 'start'
