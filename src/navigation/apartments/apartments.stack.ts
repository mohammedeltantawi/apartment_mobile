import { NavStack } from "../navigation-stack.type";

export const ApartmentsStack: NavStack = {
	id: "Apartments",
	title: "Apartments",
	isEnabled: true,
	isRendered: true,
	rolesList: [],
	menuList: {
		ApartmentsList: {
			id: "apartments.list",
			title: "Apartments List",
			isEnabled: true,
			isRendered: true,
			rolesList: []
		},
        ApartmentDetails: {
			id: "apartments.details",
			title: "Apartment Detail",
			isEnabled: true,
			isRendered: true,
			rolesList: []
		},
	}
};