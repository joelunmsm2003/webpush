var webpush = require('web-push');

const vapidKeys = webpush.generateVAPIDKeys();

// Prints 2 URL Safe Base64 Encoded Strings
console.log(vapidKeys.publicKey, '....',vapidKeys.privateKey);

xxx=webpush.setGCMAPIKey('AIzaSyAoeCJw9ev688quiD5x_DM49-CKOxnFp-Y');

console.log('gcm',xxx)


//BE_BmW8Q6L__hCnQugq7-Inp4QGags7VTr66PIlVOmxqXMQidgjSB98XZTO1lp9vISPI8lLTBOWiKQY9dhWg_ME .... LFCxnGIhRhK8uXEIqEQ5t6PLdHMkTUtgUJnMXVQyBz0
