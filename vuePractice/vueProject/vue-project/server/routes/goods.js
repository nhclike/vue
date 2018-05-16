var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var Goods=require('../models/goods');

//连接mongo数据库
mongoose.connect("mongodb://127.0.0.1:27017/dumall");

mongoose.connection.on("connected",function () {
  console.log("MongoDB connected success");
});
mongoose.connection.on("error",function () {
  console.log("MongoDB connected fail");
});

mongoose.connection.on("deconnected",function () {
  console.log("MongoDB connected deconnected");
});

router.get('/',function (req,res,next) {
  let page=parseInt(req.param("page"));//解析前台传过来的参数；第几页
  let pageSize=parseInt(req.param("pageSize")); //每页大小
  let sort=parseInt(req.param("sort")); //排序方式
  let skip=(page-1)*pageSize; //从第几个数据开始
  let params={};
  let goodsModel=Goods.find(params).skip(skip).limit(pageSize);
  goodsModel.sort({'salePrice':sort});

  goodsModel.exec(function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  })
});

module.exports=router;
