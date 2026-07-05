@echo off
cd /d C:\Users\TEMP\ad-website
"C:\Program Files\Git\cmd\git.exe" add -A
"C:\Program Files\Git\cmd\git.exe" config user.email "dev@thabangcars4u.co.za"
"C:\Program Files\Git\cmd\git.exe" config user.name "ThabangCars4U"
"C:\Program Files\Git\cmd\git.exe" commit -m "Initial commit: Thabang Cars 4 U website"
"C:\Program Files\Git\cmd\git.exe" status
echo DONE
