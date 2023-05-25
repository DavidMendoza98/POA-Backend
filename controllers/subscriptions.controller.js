const db = require("../models/");
const webpush = require('web-push');

const vapidKeys = {
    "publicKey": "BFONt7gVZdvgryU8szoYh8_HhahY8focNiNNmiXpjsZmwiPUhj2tvzj-WUjsEBImr2YYfN5bSpSX_-b25yfmNow",
    "privateKey": "Uk0C34jtkoJ_7qfsZgN7iy4-V64BophhNqVGc4dpHeI"
}

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const enviarNotificacion = async(req, res) => {
    try{
        listSubscripciones = await db.subscriptions.findAll({
            where:{
                idUsuario:req.body.idUsuario
            }
        })
        const payload = {
            "notification": {
                "title": "POA UNAH",
                "body": " 🎉 Su actividad ha sido aprobada con éxito ",
                "vibrate": [100, 50, 100],
                "image": "https://avatars2.githubusercontent.com/u/15802366?s=460&u=ac6cc646599f2ed6c4699a74b15192a29177f85a&v=4",
                "actions": [{
                    "action": "explore",
                    "title": "Go to the site"
                }]
            }
        }
    for (const i of listSubscripciones) {

        const pushSubscription = {
            endpoint: "https://fcm.googleapis.com/fcm/send/f367EtarxH0:APA91bHrYr6ZvwFDAFudYzVfjDpRjWOnA63insPGAxdFcRp8WZKwM2qj3sdq0uqmeG34vActi2GxvL3IOjRzH9zPwaDuc4-6KKdGlCs8StCDEj6GWkMjSDdlYPO3OeLtn7xLZmPjS7xu",
            keys: {
                auth: "5Nsd1wW1QeY0qWZYGOw3qA",
                p256dh: "BAVPIzgTaEIHiZFPcUUQsEeNuGv9wOjviLjgNsdjDSGFONWqC7y6OxE2e0jnmrvrRGIEAfoPSeEk3d6LbRCHur4"
            }
        };
    
        webpush.sendNotification(
            pushSubscription,
            JSON.stringify(payload))
            .then(res => {
                console.log('Enviado !!',res);
            }).catch(err => {
                console.log('Error', err);
            })
        
    }

    res.send({ data: 'Se envio subscribete!!' })
    }catch(error){
        res.status(500).send('Server error: ',error)
    }
}

module.exports = {
    enviarNotificacion
}