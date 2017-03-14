import * as application from 'application'
declare var com
declare var java
let _safetyNetHelper

export class SafetyNetHelper {
    constructor(private apiKey) {
        _safetyNetHelper = new com.scottyab.safetynet.SafetyNetHelper(apiKey)
    }

    requestTest(cb) {
        console.log('SafetyNetWrapperCallback', !!com.scottyab.safetynet.SafetyNetHelper.SafetyNetWrapperCallback)
        let SafetyNetWrapperCallback = java.lang.Object.extend({
            interfaces: [com.scottyab.safetynet.SafetyNetHelper.SafetyNetWrapperCallback],
            success(ctsProfileMatch: boolean, basicIntegrity: boolean) {
                cb(null, { ctsProfileMatch, basicIntegrity })
            },
            error(error, msg) {
                cb(msg)
            }
        })
        // let SafetyNetWrapperCallback = com.scottyab.safetynet.SafetyNetHelper.SafetyNetWrapperCallback.extend({
        //     onSuccess(args) {
        //         cb(null, args)
        //     },
        //     onError(error) {
        //         cb(error)
        //     }
        // })

        _safetyNetHelper.requestTest(application.android.context, new SafetyNetWrapperCallback())
    }
}
