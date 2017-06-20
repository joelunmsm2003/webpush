var webpush = require('web-push');

webpush.setGCMAPIKey('AIzaSyAoeCJw9ev688quiD5x_DM49-CKOxnFp-Y');

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/csjkqeytBDM:APA91bHfSKH4RsBQT6wYdy0BZrKWQBkjtZcURVwqLs8Msrra5cd9H6KynkTcJHFAO_aTIIe_AnpOltI_6YmefBrsuF2N3BSE8m6NFa73Ndm_tvvcf6KF0sPwMQu9L3K4u09NQ30YzW_I","keys":{"p256dh":"BNGJdWtbZMa9srT5W4u4Y_I3Pm0XIG8_tlnPHRSh_3jbTcpwlxzKdHYeTMoT1zOBwU6H9XY_8fH1EC7PJVfhGPw=","auth":"Eah6tJ50E1HIwi5RQbitiA=="}}
const payload = 'tstyststst';

const options = {
  vapidDetails: {
    subject: 'mailto:joelunmsm@gmail.com',
    publicKey: 'BCU3Ci8rEjI1aNj_Js4YSSebTP2t5alqusPSD2BFlsXzqIDUJ00NG-RyKhlm8NOaE0-UZjoSg_mFJbe2G-kRga0',
    privateKey: 'l4kNK-7JrTpPMT9rXMiUPOSRzPfuP6gzgHQ0R5t2Wg4'
  }
}


webpush.sendNotification(
  pushSubscription,
  payload,
  options
);


