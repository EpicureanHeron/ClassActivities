* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
		Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

  	- Answer: What advantages does it offer?
		Handles the abstraction that is ORM for us.

  	- Answer: How do I install it? How do I incorporate it into my app?
		Answered here: http://docs.sequelizejs.com/manual/installation/getting-started.html
		
  	- Answer: What the heck is a Sequelize model? What role will it play?
	  http://docs.sequelizejs.com/manual/tutorial/models-definition.html
	  Able to create a database and interact with it in an much easier fashioni


  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
		  1. create the table
		  	http://docs.sequelizejs.com/manual/installation/usage.html
		  2. create the columns
		  	http://docs.sequelizejs.com/manual/tutorial/models-definition.html

			  So maybe something like:

			  ```
			  const Task = sequelize.define('task', {
				Country: Sequelize.STRING,
				PhoneCode: Sequelize.INTEGER,
				Capital: Sequelize.STRING,
				IndependenceYear : Sequelize.String
				})
			```
		  3. population the data
			```

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
