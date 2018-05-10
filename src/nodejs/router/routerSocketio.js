module.exports = {'register':function(server){
    var peopleOl = {};
    server.on('connection', function(client){
        client.on('serverConnect', function(person){
            person = JSON.parse(person);
            peopleOl[person.id] = person;
            server.emit('clientInit', JSON.stringify(peopleOl));
        });

        client.on('serverDiscon', function(person){
            person = JSON.parse(person);
            for(var k in peopleOl){
                if(k == person.id){
                    delete peopleOl[k];
                }
                break;
            }
            server.emit('clientDiscon', JSON.stringify(peopleOl));
        });
    });
}};