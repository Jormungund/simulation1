module.exports = {
    read: ( req, res ) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_products().then((response) => {
            res.status(200).send(response)
        }).catch(err=>{
            res.status(500).send({errorMessage: "Leedle Leedle leeee, I don't know what I'm doing"});
            console.log(err);
        })
    },
    create: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { name, imageUrl, price } = req.body;
        dbInstance.create_product([ name, imageUrl, price ]).then(() => {
            res.sendStatus(200)
        }).catch(err=>{
            res.status(500).send({errorMessage: "Leedle Leedle leeee, I don't know what I'm doing"});
            console.log(err);
        })
    }
}