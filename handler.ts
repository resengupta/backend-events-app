import { Handler, Context } from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = async (event: any, context: Context) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello" // Math.floor(Math.random() * 10)
    })
  };

  return response;
};

export { hello }