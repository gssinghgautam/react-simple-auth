export interface IProvider<T> {
    setTenantId(tenantId: String): String;
    setClientId(clientId: String): String;
    setClientSecret(clientSecret: String): String;
    buildAuthorizeUrl(): string;
    extractError(redirectUrl: string): Error | undefined;
    extractSession(redirectUrl: string): T;
    validateSession(session: T): boolean;
    getAccessToken(session: T, resourceId: string): string;
    getSignOutUrl(redirectUrl: string): string;
}
export interface IAuthenticationService {
    acquireTokenAsync<T>(provider: IProvider<T>, storage?: Storage, localWindow?: Window): Promise<T>;
    restoreSession<T>(provider: IProvider<T>, storage?: Storage): T | undefined;
    invalidateSession(storage?: Storage): void;
    getAccessToken<T>(provider: IProvider<T>, resourceId: string, storage?: Storage): string;
}
export declare const service: IAuthenticationService;
export default service;
