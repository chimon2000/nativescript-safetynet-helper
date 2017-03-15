export declare type SafetyNetResult = {
    ctsProfileMatch: boolean;
    basicIntegrity: boolean;
};
export declare class SafetyNetHelper {
    private apiKey;
    constructor(apiKey: any);
    requestTest(cb: (error: Error, result: SafetyNetResult) => void): void;
}
