.PHONY: run-dev run-prod stop test

test:
	cd app/backend && \
    TESTING=true poetry run pytest --cov=src tests/ --cov-report=xml:cobertura.xml --cov-report term-missing

run-dev:
	cd app && ./start-dev.sh

run-prod:
	cd app && ./start-prod.sh

stop:
	cd app && docker stop backend-container