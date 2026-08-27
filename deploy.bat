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
git commit -m "Update site source"
git push origin main
echo.
echo [3/3] Deploying dist to gh-pages branch...
call npx gh-pages -d dist --repo=https://github.com/k28ueno/BTS.git
if %errorlevel% neq 0 (
  color 0C
  echo Deploy failed!
  pause
  exit /b %errorlevel%
)
echo.
echo ========================================
echo  Successfully updated!
echo ========================================
pause