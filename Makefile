.PHONY: run-dev run-prod stop

run-dev:
	cd app && ./start-dev.sh

run-prod:
	cd app && ./start-prod.sh
stop:
	cd app && docker stop backend-container