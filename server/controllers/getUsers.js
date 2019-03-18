const axios = require("axios");
const baseURL = 'https://randomuser.me/api/?results=';

exports.getUserAPI = (req, res, next) => {
   let query = req.body.number || 0;
   let click  = req.body.click || 0;
   let sortBy  = req.body.sort || '';
   let search  = req.body.search || '';
   let userAPI = baseURL + query;
   var userArr = new Array();

   axios.get(`${userAPI}`).then(user =>{
   for(var i =0; i < query; i++ ){
    let index = user.data.results[i].name.first[0];
    let obj = {
                  firstname:user.data.results[i].name.first,
                  lastname:user.data.results[i].name.last,
                  email:user.data.results[i].email,
                  age:user.data.results[i].dob.age
              }
              userArr.push(obj);
      }
   var searchArr = new Array();
      console.log("server get the search item: " + search);
      if(search != '' ){
        for(var i =0; i < query; i++ ){
          if(userArr[i]['firstname'].includes(search)){
            searchArr.push(userArr[i]);
          }else if (userArr[i]['lastname'].includes(search)){
            searchArr.push(userArr[i]);
          }else if (userArr[i]['email'].includes(search)){
            searchArr.push(userArr[i]);
          }else if (userArr[i]['age'].toString().includes(search)){
            searchArr.push(userArr[i]);
          }
        }
      }

      switch (click)
      {
        case 0:
              userArr.sort((a, b) =>{
                var res;
                if(sortBy == "firstname"){
                  res = a.firstname >= b.firstname ? 1: -1;
                }else if(sortBy == "lastname"){
                  res = a.lastname >= b.lastname ? 1: -1;
                }else if(sortBy == "email"){
                  res = a.email >= b.email ? 1: -1;
                }else{
                  res = a.age >= b.age ? 1: -1;
                }
                return res;
              });
                break;
        case 1:
               userArr.reverse();
               break;
        default:
               break;
      }

      res.status(200).json(search != '' ? searchArr:userArr);

   }).catch((e) =>  {
       res.status(500).send("axios err (GET): "+ e);
       console.log("axios err (GET): "+ e);
  });

}
