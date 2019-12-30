const getTableData = (req, res, db) => {
    db.select('*').from('responders')
        .then(items => {
            if(items.length) {
                res.json(items);
            } else {
                res.json({dataExists: 'false'});
            }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}));
}

const postTableData = (req, res, db) => {
    const { first_name, last_name, contact, date_of_birth, email } = req.body
    db('responders').insert({first_name, last_name, contact, date_of_birth, email})
      .returning('*')
      .then(item => {
        res.json(item)
    })
     .catch(err => res.status(400).json({dbError: 'db error'}))
}

const putTableData = (req, res, db) => {
    const { id, first_name, last_name, contact, date_of_birth, email } = req.body
    db('responders').where({id}).update({first_name, last_name, contact, date_of_birth, email})
      .returning('*')
      .then(item => {
        res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}
  
const deleteTableData = (req, res, db) => {
    const { id } = req.body
    db('responders').where({id}).del()
      .then(() => {
        res.json({delete: 'true'})
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}
  
module.exports = {
    getTableData,
    postTableData,
    putTableData,
    deleteTableData
}