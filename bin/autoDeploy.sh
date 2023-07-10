pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/jay6697117/jay6697117.github.io.git master:gh-pages
