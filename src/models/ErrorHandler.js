class ErrorHandler {
    constructor(time_in_sec = 2) {
        this._message = "";
        this._timer = null;
        this._time = time_in_sec;
    };

    errorMessage() {
        return this._message;
    }

    addErrorMessage(message) {
        if(this._timer) {
            clearTimeout(this._timer);
        }
        this._message = message;
        this._timer = setTimeout(() => this._message = "", this._time * 1000);
    }
}

export default ErrorHandler;