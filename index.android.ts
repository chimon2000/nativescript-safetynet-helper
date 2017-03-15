import * as application from 'application'
declare var com
declare var java
let _safetyNetHelper

export class SafetyNetHelper {
    constructor(private apiKey) {
        _safetyNetHelper = new com.scottyab.safetynet.SafetyNetHelper(apiKey)
    }

    requestTest(cb) {

        if(!this.apiKey) {
            return cb(new Error('SafetyNetHelper: Missing API Key'))
        }

        let SafetyNetWrapperCallback = java.lang.Object.extend({
            interfaces: [com.scottyab.safetynet.SafetyNetHelper.SafetyNetWrapperCallback],
            success(ctsProfileMatch: boolean, basicIntegrity: boolean) {
                cb(null, { ctsProfileMatch, basicIntegrity })
            },
            error(error, msg) {
                cb(new Error(msg))
            }
        })

        _safetyNetHelper.requestTest(application.android.context, new SafetyNetWrapperCallback())
    }
}
