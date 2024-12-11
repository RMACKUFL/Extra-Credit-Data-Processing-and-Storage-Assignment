# Extra-Credit-Data-Processing-and-Storage-Assignment
# Overview of this Project
Transactions are an important part of relational databases. 
Transactions allow "all or nothing" updates to databases to prevent dirty writes. 
This is especially important while dealing with things like money. 
For example: Let's say you are building a money transfer app like Venmo. 
When A initiates a transfer of X dollars to B, two things need to happen:
X dollars should be deducted from A's account
X dollars should be added to B's account
If either of these things fail, it will leave the overall accounting in a bad state.
In the real world these two updates are made as part of a single transaction.

In this assignment a memory database with transaction support was created. 
This project implements an in-memory key-value database in JavaScript. 
It provide s basic operations like get and put while supporting transactional capabilities through 
begin_transaction, commit, and rollback. Transactions ensure atomicity and allow multiple changes
to be made without affecting the main database until committed.

# Running this code
Download Node.js if you need to  
[Download Node.js](https://nodejs.org/en/download/prebuilt-installer/current)  

Clone the Code  
```
git clone https://github.com/RMACKUFL/Data-Processing-and-Storage.git
```
Within the repository run the program
```
node main.js
```
# Modifications to make this an "official" assignment in the future 
To clarify the output exactly in an output window that shows the following:  
null  
Transaction is not in process  
null  
6  
No open transaction to commit  
No ongoing transaction to rollback  
null  
null  
This would help simplify the request and make sure your code is uniform and running properly.  
The more uniform the easier it would be to provide cases to run in the code to verify proper outputs.
