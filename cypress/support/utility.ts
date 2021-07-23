
class Utility {
    //Execute Your Tests on different environment using Environment Varialble in Cypress
    //Refer: https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments
    getBaseUrl() {
        let url = Cypress.env('ENV');
        if (url == 'prod')
            return "https://www.example.com";
        else if (url == 'qa')
            return "https://testurl.com";
        else if (url == 'stg')
            return "https://testurl.com";
        else
            return "https://www.google.com";
    }
}

export default new Utility