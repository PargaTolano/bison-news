import { AuthenticationService } from '_service';

export const handleResponse = (response : Response) =>
    response.text().then( ( text : string ) => {
        const data = text && JSON.parse(text);
        
        if ( !response.ok ) {
            if ([401, 403].indexOf(response.status) !== -1) {
                AuthenticationService.getInstance().logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });