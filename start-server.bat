@echo off
chcp 65001 >nul
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do set IP=%%a
set IP=%IP: =%
echo.
echo   🎯  旅游城市大转盘
echo   ─────────────────────────
echo.
echo   手机打开:  http://%IP%:8765
echo.
echo   (电脑浏览器将自动打开)
echo.
start http://%IP%:8765
node server.js
pause
