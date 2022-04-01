# rashidas-home-for-hobbies

Special Instructions:

To run the app:
Type npm install in console
Type npm run in console
Type http-server in console
Follow link in console or copy and paste it into browser window

My project is a dashboard for hobbies. For this project, I used true crime. The page has an unordered list that pulls in wishlist items from a local JSON file. Placeholder data is pulled in using an external randomizer API. The page contains a countdown to the publication date of a true crime book. Finally, a user can add a new item to save in local storage, then display it by clicking a button on the page.

Requirements met:
1. Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app: my app imports data from the list.json file (which is a wishlist of items to watch, read or listen to) and displays the data as an unordered list.

2. Retrieve data from an external API and display data in your app: my application uses fetch() to retrieve data generated from Random Data API and displays the items as an unordered list.

3. Calculate and display data based on an external factor: the application uses "new Date().getTime();" to get the current date and time. The countdown is set to the date of an upcoming book release date of "A Haunted Road Atlas" on Amazon. The current date/time is then subtracted from the book release date to display the days, hours, and seconds until the book release (May 31, 2022 at a minute past midnight).

4. Create a form and save the values (on click of Submit button) to an external file 
You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted: filling out the "Enter new items below." form creates 3 sets of key/value pairs that are saved in local storage. Clicking the "Show Surprise Item" button will then display the saved data at the bottom of the page.
