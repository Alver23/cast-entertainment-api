// Interfaces
import { MenuModel } from '@database/models/menu/menu-interface';
import { RoleModel } from '@database/models/role/role-interface';
import { IRole } from './role-interface';

export class RoleMapper {
	private roles: RoleModel[];

	private menus: MenuModel[];

	constructor(values: RoleModel[]) {
		this.menus = [];
		this.roles = values;
	}

	async getRoles(): Promise<IRole[]> {
		return Promise.all(
			this.roles.map(async (value: RoleModel & { getMenus: () => Promise<MenuModel[]> }) => {
				const { id, name, description } = value;
				const menu = await value.getMenus();
				this.setMenus(menu);
				return { id, name, description };
			}),
		);
	}

	public setMenus(values: MenuModel[]): void {
		values.forEach((value: MenuModel) => {
			const findMenu = this.menus.find(({ id }) => id === value.id);
			if (!findMenu) {
				this.menus.push(value);
			}
		});
	}

	getMenus(): MenuModel[] {
		return this.menus;
	}
}
