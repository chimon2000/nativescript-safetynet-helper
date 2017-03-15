import { Observable } from 'data/observable';
import { SafetyNetHelper } from 'nativescript-safetynet-helper';

export class HelloWorldModel extends Observable {

    private _apiKey: string = "";
    private _message: string;

    constructor() {
        super();
        this._apiKey = global.API_KEY;
        this.updateMessage("Not ran");
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        let helper = new SafetyNetHelper(this._apiKey)

        helper.requestTest((err, result) => {
            if (err) {
                console.log(err)
                this.updateMessage(err);
                return
            }

            this.updateMessage(result)
        });
    }

    private updateMessage(msg) {
        this.message = `Status: ${msg}`
    }
}