import logging
from gunicorn.app.base import BaseApplication
from app_init import create_initialized_flask_app

import os
# Flask app creation should be done by create_initialized_flask_app to avoid circular dependency problems.
app = create_initialized_flask_app()
# Use the CALENDLY_TOKEN environment variable
calendly_token = os.environ.get('CALENDLY_TOKEN', 'default_token')
# TODO: Use calendly_token in the application logic if needed

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class StandaloneApplication(BaseApplication):
    def __init__(self, app, options=None):
        self.application = app
        self.options = options or {}
        super().__init__()

    def load_config(self):
        # Apply configuration to Gunicorn
        for key, value in self.options.items():
            if key in self.cfg.settings and value is not None:
                self.cfg.set(key.lower(), value)

    def load(self):
        return self.application

if __name__ == "__main__":
    options = {
        "bind": "0.0.0.0:8080",
        "workers": 4,
        "loglevel": "info",
        "accesslog": "-"
    }
    StandaloneApplication(app, options).run()