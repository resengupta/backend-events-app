import { Handler, Context } from 'aws-lambda';

interface Response<T> {
	dataContent?: T;
	errorContent?: Array<Error>;
}

interface Error {
	errorCode: String;
	errorMessage: String;
}

interface EventPayload {
	id: string;
	name: string;
}

const hello: Handler = async (event: any, context: Context) => {
	const data: EventPayload = { id: "id", name: "Name" }
	const response: Response<EventPayload> = { dataContent: data };
	return { statusCode: 200, body: JSON.stringify(response) };
};

export { hello }