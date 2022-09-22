const { redirect } = require("express/lib/response");
const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM cliente', (err, clientes)=>{
            if(err){
                res.json(err);
            }
            console.log(clientes);
            res.render('customers', {
                data: clientes
            })
        })
    })
};

controller.save = (req, res) =>{
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO cliente set ?', [data], (err, customer) =>{
            res.redirect('/');
        })
    })
}

controller.edit = (req, res) =>{
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM cliente WHERE id=?', [req.params.id], (err, cliente)=>{
            res.render('customer_edit',{
                data: cliente[0]
            })
        })
    })
}

controller.update = (req, res) =>{
    const newCustomer = req.body;
    req.getConnection((err, conn)=>{
        conn.query('UPDATE cliente set ? WHERE id = ?', [newCustomer, req.params.id], (err, rows)=>{
            res.redirect('/');
        })
    })
}

controller.delete = (req, res) =>{
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM cliente WHERE id=?', [req.params.id], (err, rows)=>{
            res.redirect('/');
        })
    })
}

controller.savepqrs = (req, res) =>{
    let datacontacto = req.body;
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO contacto set ?', [datacontacto], (err, pqrs)=>{
            if(err){
                res.json(err);
            }else{
                console.log(datacontacto);
                res.redirect('/');
            }  
        })
    })
    
}


module.exports = controller;