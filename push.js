var webpush = require('web-push');

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/doMuREN-vaM:APA91bEUSFqfeU2C5g8Lp5RyCzCTeNvZfoeWoZEqDVf0tolZHSsdNeFHQHp7K76ziYOBVxDS7vTRETYyYuozcb5IUAs0gJaxVp136LcM7qSI_pto3QHFFFO2gdZmLC7SF7ie4bTk0koH","keys":{"p256dh":"BE774prLJwR7SgLoOC7I60Kr46j_eUydohvX8c24oAaRLuFdcT9gbLIv6w91ju0v-vq0IemrGrkiPRubsQNGZgU=","auth":"Cp6ykRNasOkSPwbkTlDaaQ=="}};

const payload = 'tstyststst';

const options = {
  gcmAPIKey: 'AIzaSyAoeCJw9ev688quiD5x_DM49-CKOxnFp-Y',
  vapidDetails: {
    subject: 'joelunmsm@gmail.com',
    publicKey: 'BCU3Ci8rEjI1aNj_Js4YSSebTP2t5alqusPSD2BFlsXzqIDUJ00NG-RyKhlm8NOaE0-UZjoSg_mFJbe2G-kRga0',
    privateKey: 'l4kNK-7JrTpPMT9rXMiUPOSRzPfuP6gzgHQ0R5t2Wg4'
  }
}

console.log(options)

webpush.sendNotification(
  pushSubscription,
  payload,
  options
);


