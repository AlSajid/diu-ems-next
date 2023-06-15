import Section from "@/db/models/sections";
import deleteData from "@/db/utils/deleteData";
import postData from "@/db/utils/postData";
import putData from "@/db/utils/putData";
import getSections from "./getSections";

export const POST = async (request: Request) => {
	const body = await request.json();
	return await postData(Section, body, "Section Added Successfully");
};

export const GET = async () => {
	return await getSections();
};

export const PUT = async (request: Request) => {
	const {searchParams} = new URL(request.url);
	const id = searchParams.get("id") || "";

	const body = await request.json();
	return await putData(Section, {_id: id}, body, "Section Updated Successfully");
};

export const DELETE = async (request: Request) => {
	const {searchParams} = new URL(request.url);
	const id = searchParams.get("id") || "";

	return await deleteData(Section, id, "Section Deleted Successfully");
};
