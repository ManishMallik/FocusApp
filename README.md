# Focus App
Mentis (tentative name) is an educational app that limits doom scrolling on Instagram or TikTok by redirecting user’s subconscious attention towards learning a topic of their choice or interest such as a language or a skill. With doom scrolling being an increased issue in the last few years, our attention span is depleting at an alarming rate, with big tech companies converting our subconscious attention to advertising dollars. Mentis is a potential anti-catalyst to this ever-evolving problem, intercepting the user’s activity on an app by suggesting a more productive alternative route – learning. The user will be able to set the amount of time they would like to spend on a social media app, and when that time is reached, Mentis will lock the app temporarily until the user completes a certain quiz or lesson based on a topic of their choice. Only when they complete these tasks are they allowed to continue using the respective social media app.

# MVP
- Screen for user to choose topics of their interest
  - Have a list of popular topics, dropdown
  - Have user type out the topics of their choice (if there can be a filter)
- Home screen
- Screen for a quiz or lesson of a topic
  - Powered by Modulearn
  - Multiple choice for quizzes
- Add a user to our Firebase
  - User's name
  - User's email (ID)
  - User's topics of interests

# Stretch Goal
- Having a searchbar of topics
- Having a combination of multiple choice and free response
- Having difficulty levels, where user can choose between MC, free response, or both
- Summarizing user's progress, results, etc.

# Directions to Run Frontend
To run the frontend, make sure you are in the following directory:
yourDirectory\FocusApp\frontend>

Type the following command in that directory:
npx expo start

# Directions to Run Backend
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

# Rules
Make sure whenever you are developing, do it in your own branch, not the main branch.
To switch to your branch using git:
1. git branch yourBranchName (e.g. git branch Manish). Do this command if you do not have your branch.
2. git checkout yourBranchName
