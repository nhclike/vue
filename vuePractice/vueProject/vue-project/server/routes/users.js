var express = require('express');
var router = express.Router();
var User=require('./../models/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//登录接口
router.post('/login', function(req, res, next) {
  var param={
    userName:req.body.userName,
    userPwd:req.body.userPwd
  };
  User.findOne(param,function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }
    else{
      if(doc){
        //cookie
        res.cookie("userId",doc.userId,{
          path:'/',
          maxAge:1000*60*60
        });
        res.cookie("userName",doc.userName,{
          path:'/',
          maxAge:1000*60*60
        });
       // req.session.user=doc; //存储在session中
        res.json({
          status:'0',
          msg:'',
          result:{
            userName:doc.userName
          }
        })
      }
    }
  })
});


//登出接口
router.post('/logout',function (req,res,next) {
  res.cookie("userId","",{
    path:'/',
    maxAge:-1
  })
  res.json({
    status:'0',
    msg:"退出登录成功",
    result:""
  })
});

router.get('/checkLogin',function (req,res,next) {
  if(req.cookies.userId){
    res.json({
      status:'0',
      msg:'当前已经登录',
      result:req.cookies.userName || ''
    })
  }
  else{
    res.json({
      status:'1',
      msg:'当前未登录',
      result:''
    })
  }
});
module.exports = router;
