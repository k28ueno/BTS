@echo off
color 0A
echo ========================================
echo  1-Click Deploying to GitHub Pages...
echo ========================================
echo.
echo [1/3] Building latest site...
call npm run build
if %errorlevel% neq 0 (
  color 0C
  echo Build failed!
  pause
  exit /b %errorlevel%
)
echo.
echo [2/3] Saving source code to main branch...
git add .
git commit -m "Update site source" >nul 2>&1
git push origin main
echo.
echo [3/3] Deploying dist to gh-pages branch...
cd dist
git init >nul 2>&1
git add -A
git commit -m "Deploy site" >nul 2>&1
git push -f https://github.com/k28ueno/BTS.git master:gh-pages
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
echo  Successfully updated!
echo ========================================
pause