var orm = require("./config/orm.js");
//SELECT ?? FROM ?? ORDER BY ?? DESC
orm.selectAndOrder("party_name","parties", "id")

orm.selectAndOrder("client_name", "clients", "id")
//"SELECT ?? FROM ?? WHERE ?? = ?";
orm.selectWhere("party_name", "parties", "party_type", "grown-up"  )
//rightJoin: function(t1, t2, col1, col2){

//select * from clients right join parties on parties.client_id = clients.id;
orm.rightJoin("clients", "parties", "id", "client_id")