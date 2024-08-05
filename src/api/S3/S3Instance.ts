import AWS from 'aws-sdk';
import Constants from '../../utils/Constants';

// Configuración de AWS
AWS.config.update({
  accessKeyId: Constants.accessKeyId,
  secretAccessKey: Constants.secretAccessKey,
  region: Constants.region,
});

class S3Singleton {
  static instance: AWS.S3 | null = null;

  static getInstance() {
    if (S3Singleton.instance === null) {
      S3Singleton.instance = new AWS.S3();
    }
    return S3Singleton.instance;
  }
}

export default S3Singleton;
