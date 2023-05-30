const db = require("../models/");
const webpush = require('web-push');

const vapidKeys = {
    "publicKey": "BOGaom5t7Rgfbxc9u9pxnw4HoFPSfsSMLJUbE3xwn-uO9yve_qnLlQc2OY-f6GTHiFGeGYcJotTIy5o6YmeYD_8",
    "privateKey": "prBCZ0tk1BrNKfv9tB490zXVNdVRxHxXftrKf3bIb5k"
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
                "body": " 🎉 Su actividad ha sido aprobada con éxito BHnbEKI3uY8Wv5odj45gG_pgm7yEN5pXrFO6Oy6-6hwZ2AVJyqoKphpcCbz4YHVKkGXxNmFLTlzJhA8Fu88YaNc BHnbEKI3uY8Wv5odj45gG_pgm7yEN5pXrFO6Oy6-6hwZ2AVJyqoKphpcCbz4YHVKkGXxNmFLTlzJhA8Fu88YaNc BHnbEKI3uY8Wv5odj45gG_pgm7yEN5pXrFO6Oy6-6hwZ2AVJyqoKphpcCbz4YHVKkGXxNmFLTlzJhA8Fu88YaNc ",
                "url":"www.google.com",
                "vibrate": [100, 50, 100],
                "image": "",
                "actions": [{
                    "action": "explore",
                    "title": "Go to the site"
                }]
            }
        }
        // for (const i of listSubscripciones) {

        //     const pushSubscription = {
        //         endpoint: "https://fcm.googleapis.com/fcm/send/f367EtarxH0:APA91bHrYr6ZvwFDAFudYzVfjDpRjWOnA63insPGAxdFcRp8WZKwM2qj3sdq0uqmeG34vActi2GxvL3IOjRzH9zPwaDuc4-6KKdGlCs8StCDEj6GWkMjSDdlYPO3OeLtn7xLZmPjS7xu",
        //         keys: {
        //             auth: "5Nsd1wW1QeY0qWZYGOw3qA",
        //             p256dh: "BAVPIzgTaEIHiZFPcUUQsEeNuGv9wOjviLjgNsdjDSGFONWqC7y6OxE2e0jnmrvrRGIEAfoPSeEk3d6LbRCHur4"
        //         }
        //     };
        
        //     webpush.sendNotification(
        //         pushSubscription,
        //         JSON.stringify(payload))
        //         .then(res => {
        //             console.log('Enviado !!',res);
        //         }).catch(err => {
        //             console.log('Error', err);
        //         })
            
        // }

        const pushSubscription = {
            endpoint: 'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkb3IC1SV77fFQqPccOosfGk5oudk3r5NBZr74SfaLVUYcJd4bg1RSIIGKUintAZX_jBsEbFkC69NEBklA1x6HUHDj9cijbglrBTYdIQmx2nyYGey4nBWwVIdY2EFnoibGgCKUmOjkGAmFDCGQiQq4juJf1MrXA5iRGl3-Oky5nmacjM4',
            keys: {
                auth: 'dl4Y7ZhZLG2POzRINaBngg',
                p256dh: 'BHnbEKI3uY8Wv5odj45gG_pgm7yEN5pXrFO6Oy6-6hwZ2AVJyqoKphpcCbz4YHVKkGXxNmFLTlzJhA8Fu88YaNc'
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

    res.send({ data: 'Se envio subscribete!!' })
    }catch(error){
        res.status(500).send('Server error: ',error)
    }
}

module.exports = {
    enviarNotificacion
}