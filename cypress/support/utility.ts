
export class Config{
    getBaseUrl(){
        let url = Cypress.env('Site');
        if(url=='prod')
            return "https:www.example.com";
        else if(url=='qa')
            return "testurl";
        else if(url=='stg')
            return "testurl";
    }
   

}