module.exports = {'register':function(app,opt){
    app.post('/sign/signup', function (req, res){
        var terms = {
            uname:req.body.uname
        };
        opt.utilMongo.select('users',terms,function(data){
            if(data.length > 0){
                res.send(opt.utilRes(false,'','repeat'));
            }else{
                opt.utilMongo.insert('users',req.body,function(){
                    res.send(opt.utilRes(true,req.body,'signup'));
                });
            }
        });
    });

    app.post('/sign/signin', function (req, res){
        opt.utilMongo.select('users',{'uname':req.body.uname},function(data){
            if(data.length > 0){
                if(req.body.psw == data[0].psw){
                    if(req.body.token){
                        // 判断token有效期
                        var oldtoken = opt.jwt.decode(req.body.token,'secret');
                        var d = (new Date().getTime())/1000;
                        if(d >= oldtoken.exp){
                            var token = opt.jwt.sign({
                                'uname': req.body.uname
                            },'secret',{ 
                                expiresIn: 60 * 60 
                            });
                            res.send(opt.utilRes(true,token,'signin'));
                        }else{
                            if(oldtoken.uname == req.body.uname){
                                res.send(opt.utilRes(false,'','repeat'));
                            }else{
                                res.send(opt.utilRes(false,'','differ'));
                            };
                        };
                    }else{
                        var token = opt.jwt.sign({
                            'uname': req.body.uname
                        }, 'secret', { 
                            expiresIn: 60 * 60 
                        });
                        res.send(opt.utilRes(true,token,'signin'));
                    }
                }else{
                    res.send(opt.utilRes(false,req.body.uname,'errpsw'));
                }
            }else{
                res.send(opt.utilRes(false,'','non'));
            }
        });
    });

    // app.post('/sign/signout', function (req, res){
    //     if(req.session.user){
    //         delete req.session.user;
    //     }
    //     res.send(utilRes(true,'','signout'));
    // });
}};