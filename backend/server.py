import os
import sys
import django
from django.conf import settings
from django.http import HttpResponse
from django.urls import path

# --- Configurações mínimas ---
if not settings.configured:
    settings.configure(
        DEBUG=True,
        SECRET_KEY="unsafe-secret-key-for-dev-only",  # Mude isso em produção!
        ALLOWED_HOSTS=["*"],
        ROOT_URLCONF=__name__,
        MIDDLEWARE=[
            "django.middleware.common.CommonMiddleware",
            "django.middleware.security.SecurityMiddleware",  # Adicionado para segurança básica
        ],
    )

# Inicializa o Django
django.setup()


# --- Views ---
def hello(request):
    return HttpResponse("Hello, Django!".encode("utf-8"), content_type="text/plain")


# URL patterns
urlpatterns = [
    path("", hello),  # Acessível na raiz: http://localhost:8000/
]

# --- Entrypoint ---
if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", __name__)
    from django.core.management import execute_from_command_line

    # Ajusta argv para rodar o servidor (porta 8000, acessível de qualquer IP)
    sys.argv = [sys.argv[0], "runserver", "0.0.0.0:8000"]
    execute_from_command_line(sys.argv)
