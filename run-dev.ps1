# Set the path to include Node.js
$env:Path = "C:\Program Files\nodejs;" + $env:Path

# Navigate to frontend directory
Set-Location "C:\Users\Habiba saad\Documents\GitHub\DEPI-GP-E-Commerce\frontend"

# Run vite directly
& ".\node_modules\.bin\vite.cmd"
