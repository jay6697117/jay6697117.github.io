pnpm i
git init
git add -A
git commit -m "自动部署到github: root目录"

pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "自动部署到github: dist目录"

git push -f https://github.com/jay6697117/jay6697117.github.io.git master:gh-pages
cd ../
rm -rf dist
