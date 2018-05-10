module.exports = {'register':function(app,utilMongo,utilRes){
    app.post('/sign/signup', function (req, res){
        var terms = {
            uname:req.body.uname
        };
        utilMongo.select('userdata',terms,function(data){
            if(data.length > 0){
                res.send(utilRes(false,'','repeat'));
            }else{
                utilMongo.insert('userdata',req.body,function(){
                    res.send(utilRes(true,req.body,'signup'));
                });
            }
        });
    });

    app.post('/sign/signin', function (req, res){
        var terms = {
            uname:req.body.uname
        };
        utilMongo.select('userdata',terms,function(data){
            if(data.length > 0){
                if(req.body.psw == data[0].psw){
                    if(req.session.user){
                        if(req.session.user == req.body.uname){
                            res.send(utilRes(true,req.body.uname,'repeat'));
                        }else{
                            res.send(utilRes(true,req.body.uname,'differ'));
                        }
                    }else{
                        req.session.user = req.body.uname;
                        res.send(utilRes(true,req.body.uname,'signin'));
                    }
                }else{
                    res.send(utilRes(true,req.body.uname,'pswerr'));
                }
            }else{
                res.send(utilRes(false,'','non'));
            }
        });
    });

    app.post('/sign/signout', function (req, res){
        if(req.session.user){
            delete req.session.user;
        }
        res.send(utilRes(true,'','signout'));
    });
}};