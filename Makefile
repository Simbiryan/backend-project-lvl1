install:
	        npm install--save-dev @babel/core @babel/cli @babel/node @babel/preset-env

publish:
	        npm publish --dry-run

lint:
	        npx eslint .

startEven:
					npx babel-node src/bin/brain-even.js

startCalc:
					npx babel-node src/bin/brain-calc.js

startGcd:
					npx babel-node src/bin/brain-gcd.js

startProgression:
					npx babel-node src/bin/brain-progression.js
					
startPrime:
					npx babel-node src/bin/brain-prime.js
