# Run Django
pip install -r requirements.txt
python manage.py runserver &

# Run React
echo "Starting React development server..."
cd frontend
npm install
npm run start