const db = require('../database');

class Responders {
    static retrieveAll (callback) {
        db.query('SELECT * FROM responders', (err, res) => {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }

    
}

module.exports = Responders;