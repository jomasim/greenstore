#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ root@cps.spartancash.co.ke:/var/www/shop/
echo "Deployment complete"
