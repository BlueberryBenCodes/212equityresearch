// Change to the correct working directory before starting Next.js
process.chdir('/Users/bengogetter/Downloads/212-equity-site');
process.argv = [process.argv[0], process.argv[1], 'dev'];
require('/Users/bengogetter/Downloads/212-equity-site/node_modules/next/dist/bin/next');
