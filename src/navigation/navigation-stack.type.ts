export interface NestedNavStack {
	id: string;
	title: string;
	isEnabled: boolean;
	isRendered: boolean;
	rolesList: [];
	menuList?: { [key: string]: NestedNavStack };
}

export interface NavStack {
	id: string;
	title: string;
	isEnabled: boolean;
	isRendered: boolean;
	rolesList: [];
	menuList: { [key: string]: NestedNavStack };
}
