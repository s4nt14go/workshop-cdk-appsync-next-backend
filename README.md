Backend of this [frontend](https://github.com/s4nt14go/workshop-cdk-appsync-next-frontend) for [CDK with Next.js and AWS Amplify Workshop](https://github.com/dabit3/next.js-cdk-amplify-workshop)

### Requirements

* AWS account
* AWS CLI
* AWS CDK

### Installation

* Clone this repo and install dependencies with `npm i`
* Configure your aws profile with the aws account credentials you want to use for the deployment
```shell script
export AWS_DEFAULT_PROFILE=<your aws profile>
```
* In order to use CDK you need to have a bootstrap stack in you AWS profile, you can install it with
 ```shell script
 cdk bootstrap
 ```
* Deploy:
```shell script
npm run deploy
```
...this last command will create a file `cdk-exports.json` which should be used in the [frontend](https://github.com/s4nt14go/workshop-cdk-appsync-next-frontend) to connect it to the deployed backend. 
* For cleanup
```shell script
cdk destroy
```
