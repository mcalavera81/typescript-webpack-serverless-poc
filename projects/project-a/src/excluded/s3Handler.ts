import AWS from 'aws-sdk'

export class S3Client {
  protected client: AWS.S3

  constructor() {
    this.client = new AWS.S3()
  }

  public async put(
    request: AWS.S3.Types.PutObjectRequest
  ): Promise<AWS.S3.Types.PutObjectOutput> {
    let x =new Promise<AWS.S3.Types.PutObjectOutput>((resolve, reject) => {

        this.client.putObject(request).promise()
        .then((data)=>{
            resolve(data)
        }).catch((err)=> {
          reject(new Error(`Error on putObject: ${err}`))
        })  

    })
    

    
    return x;
  }

  public createPutPublicJsonRequest(
    location: string,
    filename: string,
    contents: string
  ) {
    const request: AWS.S3.Types.PutObjectRequest = {
      Bucket: location,
      Key: filename,
      Body: contents,
      ContentType: 'application/json; charset=utf-8',
      //ACL: 'public-read',
      //CacheControl: 'max-age=60'
    }

    return request;
  }
}

