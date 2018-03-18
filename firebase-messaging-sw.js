importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

firebase.initializeApp({
    "messagingSenderId": "795148381704"
});

const  messaging = firebase.messaging();

messaging.setBackgroundMessageHandler( function (payload) {
    return self.registration.showNotification({}, {});
});

//ek6sPVkgff8:APA91bFyUNp0bGJQzpVawJGIaJ6V8rdb40CdajOs7cte1-dvYoI_g3A28ngpG8nV5XU4vwKanEFrqRBbsjl3iy6AQiQ6iEbv9an6PvTFiMxJkpfzzgn9oVMIL6alM1FiUd9hM6IRQsBj
//https://fcm.googleapis.com/fcm/send
//Headers
//  Content-Type - application/json
//  Authorization -  key=Chave do servidor
/* Uma notificação
{
    "to": "entzCs4xQVI:APA91bG5yzOcPiCiIZjZJvBl_nZ9KI9PkhQYDL14zpMxpsOj4szYJZhu2T87k64aywFSdo8-MmcMMmMsPE-UXfTc5TGh4cnfd0fskabofRErs998N3FRlLCAYvj6B0aeYf0U0tFqFmT9",
    "notification": {
    "title": "minha notificação",
        "body": "Aqui vai a descrição da notificação",
        "click_action": "https://www.facebook.com"
    }
}
*/

/* 1000 notificação
{
    "registation_ids": ["entzCs4xQVI:APA91bG5yzOcPiCiIZjZJvBl_nZ9KI9PkhQYDL14zpMxpsOj4szYJZhu2T87k64aywFSdo8-MmcMMmMsPE-UXfTc5TGh4cnfd0fskabofRErs998N3FRlLCAYvj6B0aeYf0U0tFqFmT9"},
    "notification": {
    "title": "minha notificação",
        "body": "Aqui vai a descrição da notificação",
        "click_action": "https://www.facebook.com"
    }
}
*/

//topicos
//https://iid.googleapis.com/iid/v1/..chave do usuario./rel/topics/novo_topico
//Headers
//  Content-Type - application/json
//  Authorization -  key=Chave do servidor

/* https://fcm.googleapis.com/fcm/send
{
	"to": "/topics/novo_topico",
	"notification": {
		"title": "minha notificação",
		"body": "Aqui vai a descrição da notificação",
		"click_action": "https://www.facebook.com"
	}
}
 */