type HttpCode = 200 | 201 | 301 | 400 | 404 | 500;

type HttpResponse = {

    code: HttpCode;
    text: string;
    printChars?: number;
};

function printHttpResponse(response: HttpResponse): void {

    if (response.printChars !== undefined) {
        
        console.log(response.text.substring(0, response.printChars));
        return;
    }

    console.log(response.text);
}

printHttpResponse({ code: 200, text: 'OK' }); // OK
printHttpResponse({ code: 201, text: 'Created' }); // Created
printHttpResponse({ code: 400, text: 'Bad Request', printChars: 4 }); // Bad
printHttpResponse({ code: 404, text: 'Not Found' }); // Not Found
printHttpResponse({ code: 404, text: 'Not Found', printChars: 3 }); // Not
printHttpResponse({ code: 500, text: 'Internal Server Error', printChars: 1 }); // I