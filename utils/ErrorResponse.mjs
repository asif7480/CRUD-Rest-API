export class ErrorResponse extends Error {
    constructor(statusCode, message){
        super(message)
        const error = new Error(message)
        error.statusCode = statusCode
    }
}

// export class ErrorResponse extends Error {
//     constructor(statusCode, message) {
//         super(message);  // Pass the message to the parent (Error) class
//         this.statusCode = statusCode;  // Set the custom statusCode property
//         this.name = this.constructor.name;  // Optionally set the error name to the class name
//         Error.captureStackTrace(this, this.constructor);  // Capture the stack trace
//     }
// }