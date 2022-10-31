set mypath=%~dp0
echo %mypath%
pushd %~dp0
ng build --prod