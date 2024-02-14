import axios from "axios";
import client from "../../network/client";
import { Apartment} from "../../models/apartment.model";
import { APARTMENTS_URLS } from "../urls/apartments";


export async function getApartments(
): Promise<{ status: number; data: any }> {
	const result = await client
		.get({url: `${APARTMENTS_URLS.APARTMENTS_LIST}`})
		.then((res) => {
			return {
				status: res.status,
				data: res.data
			};
		})
		.catch((err) => {
			return { status: err.response.status, data: err.response.data };
		});
	return result;
}

export async function getApartment( id: string
	): Promise<{ status: number; data: Apartment }> {
		const result = await client
			.get({ url: `${APARTMENTS_URLS.APARTMENTS_LIST}${APARTMENTS_URLS.APARTMENT}/${id}`})
			.then((res) => {
				return {
					status: res.status,
					data: res.data
				};
			})
			.catch((err) => {
				return { status: err.response.status, data: err.response.data };
			});
		return result;
	}