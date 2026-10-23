.PHONY: lint install clean

install:
	npm ci

lint:
	npx eslint app/ components/ --ext .ts,.tsx

clean:
	rm -rf node_modules .next