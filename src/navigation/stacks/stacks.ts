import { NavStack } from "../navigation-stack.type";
import { ApartmentsStack } from "../apartments/apartments.stack";

export const MainStacks: NavStack = {
	id: "Main",
	title: "Main",
	isEnabled: true,
	isRendered: true,
	rolesList: [],
	menuList: {
		Apartments: {
			id: "Apartments",
			title: "Apartments",
			isEnabled: true,
			isRendered: true,
			rolesList: []
		}
	}
};

const Stacks = {
	MainStacks,
    ApartmentsStack
};



export default Stacks;
