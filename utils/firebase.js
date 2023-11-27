const { v4: uuidv4 } = require('uuid');
const path = require('path');
const admin = require('firebase-admin');

class FirebaseUtils {

    static async uploadImageToFirebase(rawfile, destinationPath) {
        try {
            const bucket = admin.storage().bucket();
            const { buffer, originalname } = rawfile;
            const filename = Date.now() + '-' + originalname;

            // Upload the image to Firebase Cloud Storage
            const file = bucket.file(`${destinationPath}/${filename}`);
            await file.save(buffer, { contentType: 'image/jpeg' });

            const imageUrl = await file.getSignedUrl({
                action: 'read',
                expires: '2030-01-01',
            });
            return imageUrl;

        } catch (error) {
            console.error('Error uploading image to Firebase:', error);
            throw error;
        }
    }
}

module.exports = FirebaseUtils;