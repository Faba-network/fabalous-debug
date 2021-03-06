export interface IRoutes {
    route: string;
    module: any;
    view?: string;
}

export default class Routes {
    static INDEX: IRoutes = {
        route: "/", module: async(): Promise<void> => {
            return System.import("./../debug");
        }
    };

    static getRoutes() {
        let routes = [
            Routes.INDEX
        ];

        return routes;
    }
}