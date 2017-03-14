import { Observable } from 'data/observable';
import { SafetyNetHelper } from 'nativescript-safetynet-helper';

export class HelloWorldModel extends Observable {

    private _apiKey: string = "";
    private _message: string;

    constructor() {
        super();
        this._apiKey = "";
        this.updateMessage("Input your key");
    }

    get apiKey(): string {
        return this._apiKey;
    }

    set apiKey(value: string) {
        if (this._apiKey !== value) {
            this._apiKey = value;
            this.notifyPropertyChange('apiKey', value)
        }
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
        this.message = msg;
    }
}