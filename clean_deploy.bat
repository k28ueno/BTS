@echo off
color 0A
echo ========================================
echo  Cleaning and Force Deploying to GitHub Pages...
echo ========================================
echo.

REM 1. 古いビルドフォルダとViteキャッシュの完全削除
if exist dist rd /s /q dist
if exist node_modules\.vite rd /s /q node_modules\.vite

echo [1/3] Rebuilding latest site from scratch...
call npm run build
if %errorlevel% neq 0 (
  color 0C
  echo Build failed!
  pause
  exit /b %errorlevel%
)

echo.
echo [2/3] Updating main branch...
git add .
git commit -m "Clean rebuild" >nul 2>&1
git push origin main

echo.
echo [3/3] Fresh deploying dist to gh-pages branch...
cd dist
git init
git checkout -b gh-pages
git add -A
git commit -m "Fresh deploy"
git push -f https://github.com/k28ueno/BTS.git gh-pages

if %errorlevel% neq 0 (
  cd ..
  color 0C
  echo Deploy failed!
  pause
  exit /b %errorlevel%
)

cd ..
echo.
echo ========================================
echo  Successfully Clean Deployed!
echo ========================================
pause