@echo off
color 0A
echo [1/3] Updating main branch (Source Code)...
git add .
git commit -m "Update source code" >nul 2>&1
git push origin main

echo.
echo [2/3] Building site...
call npm run build
if %errorlevel% neq 0 (
  color 0C
  echo Build failed!
  pause
  exit /b %errorlevel%
)

echo.
echo [3/3] Pushing dist to gh-pages branch (Web Site)...
cd dist
if exist .git rd /s /q .git
git init
git add -A
git commit -m "Deploy site update"
git push -f https://github.com/k28ueno/BTS.git HEAD:gh-pages

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
echo  Successfully Deployed to BOTH Branches!
echo ========================================
pause