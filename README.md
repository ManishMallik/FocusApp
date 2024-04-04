# FocusApp
To run the frontend, make sure you are in the following directory:
yourDirectory\FocusApp\frontend>

Type the following command in that directory:
npx expo start

To run the backend, make sure you are in the following directory:
yourDirectory\FocusApp\backend>

Type the following commands one by one:
1. python3 -m venv env (for Mac/Unix) or py m -venv env (for Windows)
2. source env/bin/activate (mac/unix users) or .\env\Scripts\activate (windows users)
3. pip install flask (if you don't have it)
4. pip install python-dotenv (if you don't have it)
5. flask run

To get from the backend to frontend in your terminal, run the following command:
cd ../frontend

As for the other way around, run the following:
cd ../backend

Make sure whenever you are developing, do it in your own branch, not the main branch.
To switch to your branch using git:
git branch yourBranchName (e.g. git branch Manish). Do this command if you do not have your branch.
git checkout yourBranchName