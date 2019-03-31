
/ * NodeJS Code  */

//Required Modules
var express = require('express'),
    http = require('http'),
    formidable = require('formidable'),
    fs = require('fs'),
    path = require('path');
    
var app = express();


//All express server code goes here




//Upload route
app.post('/upload',function(req,res){
  
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files){
    
    var old_path = files.file.path;
    
    
  });

});