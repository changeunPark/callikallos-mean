var router = require('express').Router();
var multer = require('multer');
router.post('/', function(req, res, next){
try{

    req.getConnection(function(err, connection) {
      if(err)
      {
        console.error('SQL Connection error: ', err);
        return next(err);
      }
      else {

        var insertSql = 'INSERT INTO display set ?';
        var insertValue = {
          user_id:req.decoded.user_id,
          photo_path:req.body.mainImage,
          title:req.body.title,
          information:req.body.detail,
          display_type:req.body.type
        };
        connection.query(insertSql, insertValue, function (error, results, next) {
        // databases에서  select 문으로 중복된 사용자 찾아야함.
            if(err){
              console.error('SQL error: ', err);
              return next(err);
            } else{
              res.status(201).send({success:true, message:'전시회가 등록되었습니다.'});
            }
        });

      }
  });
}
catch(ex){
  console.error("Internal error: "+ex);
  return next(ex);
}
});



module.exports = router;
