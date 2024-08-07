import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    add(body: {
        n1: number;
        n2: number;
    }): {
        'Sum of the two Numbers is': number;
    };
    subtract(body: {
        n1: number;
        n2: number;
    }): {
        'Subtraction of the two Numbers is': number;
    };
    multiply(body: {
        n1: number;
        n2: number;
    }): {
        'Multification of the two Numbers is': number;
    };
    divide(body: {
        n1: number;
        n2: number;
    }): {
        'Division of the two Numbers is': number;
    };
}
