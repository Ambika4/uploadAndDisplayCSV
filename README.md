# uploadAndDisplayCSV   
The server will upload and display the csv file   
Steps to setup the Project   
1.Install Node.js depending on your operating system   
2.npm init :-It is used to setup npm package   
3.npm install --save express   
4.Do "npm install" to install all dependency as per project requirement.   
Functionality in project   
1)Upload CSV File   
route:-http://localhost:8000/files/upload   
Method:POST   
Input/Req:CSV file   
Output/Res:file will appear in the list at home page.   

2)list of all uploaded csv files   
route:http://localhost:8000/  
Method:GET  
Input/Req:none  
Output/Res:the lists of file at home page.   

3)User selects a file, display all the data (with column headers) in a table on the page   
route:http://localhost:8000/files/display/:id    
Method:GET    
Input/Req:none  
Output/Res:File data in table format  

Other funtions   
1)Search box which searches on the front end itself and displays the matching rows of the table only by second column  
2)Sorting button (ascending and descending) for each column on the front end   
3) validation on the front end and server side on being able to upload only csv type of files  
4)Pagination of the data displayed in the table to a max of 100 records per page  
