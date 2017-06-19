from pywebpush import webpush, WebPushException

try:
    webpush(
        subscription_info={"endpoint":"https://fcm.googleapis.com/fcm/send/d5IDcqtRprw:APA91bH0lFUqtpqiGPRWVod8J-svnJVER7RfeL2P4zvCUrx3fPRtvqatVO_fvRx9K069j8egM9jRX_qBbwQxb8w21FveAI6tsUPy-yicNpTjSwNsmyXF488fDqnKj1OC3Fr3tWSr8Cbr","keys":{"p256dh":"BHjtUOpQKu3_kKyMuoa1MeBOKIzpiabS1r2iasQ0U_k7ANQASTeCHEaCHMxnNitvWORYSuJZUhufcxKBfhr-Rh0=","auth":"rTBDZITp3VNollNdRQRSug=="}},
        data="Mary had a little lamb, with a nice mint jelly",
        vapid_private_key="/home/push/ENV/vapid/python/private_key.pem",
        vapid_claims={
             "sub": "mailto:admin@example.com",
             "aud": "https://fcm.googleapis.com",
             "exp": "1401340"
            }
    )
except WebPushException as ex:
    print("I'm sorry, Dave, but I can't do that: {}", repr(ex))