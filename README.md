# rashidas-home-for-hobbies

Special Instructions:

To run the app:
Install node
Type npm run in console
Type http-server in console
Follow link in console or copy and paste it into browser window

My project is a dashboard for hobbies. For this project, I used true crime.

Requirements met:
1. Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app: my app imports data from the list.json file (which is a wishlist of items to watch, read or listen to) and displays the data as an unordered list.

2. Retrieve data from an external API and display data in your app: my application uses fetch() to retrieve data generated from Random Data API and displays the items as an unordered list.

3. Calculate and display data based on an external factor: the application uses "new Date().getTime();" to get the current date and time. The countdown is set to the date of an upcoming book release date of "A Haunted Road Atlas" on Amazon. The current date/time is then subtracted from the book release date to display the days, hours, and seconds until the book release (May 31, 2022 at a minute past midnight).