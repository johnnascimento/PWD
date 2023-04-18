const WEB_PUSH = require('web-push');
const VAPID = require('../vapid.json');

// Run on CLI
// web-push generate-vapid-keys --json > vapid.json

WEB_PUSH.setVapidDetails(
    'mailto:john@johnstack.com',
    VAPID.publicKey,
    VAPID.privateKey
)

const PUSH_SUBSCRIPTION = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cgaAFWHNE0U:APA91bH1SuFJrxZLFt6JU7SLYTd9WRxXBKi0Oa53LWCFdd08fhtXmKNywAWCYx8VKv_t_hFUsxhYZl8EWI3AiJb-10aLtFJrtUnk8P79aVmchRRyzzmxGBp2SqxKJRczavJgXkBEeit8',
    keys: {
        auth: 'zAboDDmCsCdCzElKDK6srQ',
        p256dh: 'BOYf52EGVh4J89P4n6OJQKaZWzHj6Cj-PJG6cNOOVpDpmSmtQz3os-XPiH7CW1Qu7_wkTow9hOVs0lI8P9Jc0Hg'
    }
};

WEB_PUSH.sendNotification(PUSH_SUBSCRIPTION, 'A notification from push-server.js');
console.log('Push sent to client!');

