install:
	        npm install--save-dev @babel/core @babel/cli @babel/node @babel/preset-env
start1:
	        npx babel-node src/games/brain-games.js
start2:
					npx babel-node src/games/brain-even.js
start3:
					npx babel-node src/games/brain-calc.js
start4:
					npx babel-node src/games/brain-gcd.js
start5:
					npx babel-node src/games/brain-progression.js
publish:
	        npm publish --dry-run
lint:
	        npx eslint .
