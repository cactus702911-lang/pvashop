@echo off
title Portfolio Website Launcher
cls

echo ==========================================
echo   Portfolio Website Launcher
echo ==========================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not found in your PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    echo If you have installed it, try restarting your computer.
    echo.
    pause
    exit /b
)

:: Navigate to the script directory
cd /d "%~dp0"

:: Check for node_modules
if not exist node_modules (
    echo [INFO] First time setup: Installing dependencies...
    echo This might take a few minutes.
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install dependencies.
        echo Please check your internet connection.
        pause
        exit /b
    )
)

echo.
echo [INFO] Starting development server...
echo [INFO] The website will open automatically in your browser.
echo.
echo Press Ctrl+C to stop the server.
echo.

:: Start the server
call npm run dev -- --open

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Server stopped with an error.
)

pause
