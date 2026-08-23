@echo off
chcp 65001 > nul
title 大会運営ポータル 起動スクリプト

echo ==========================================
echo  大会運営ポータル を起動しています...
echo ==========================================
echo.

:: プロジェクトディレクトリへ移動
cd /d "D:\BTS"

:: 開発サーバーをバックグラウンドで起動
start "Vite Dev Server" cmd /k "npm run dev"

:: サーバーが立ち上がるまで少し待機（3秒）
timeout /t 3 /nobreak > nul

:: ブラウザでアプリを開く
echo ブラウザを開いています...
start http://localhost:5173/

echo.
echo 起動が完了しました！このウィンドウは閉じて構いません。
timeout /t 3 > nul
exit