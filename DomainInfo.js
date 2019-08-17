"use strict";
/**
 * Wrapper class for Custom Domain information
 */
var DomainInfo = /** @class */ (function () {
    function DomainInfo(data) {
        /**
         * Sometimes, the getDomainName call doesn't return either a distributionHostedZoneId or a regionalHostedZoneId.
         * AFAICT, this only happens with edge-optimized endpoints.
         * The hostedZoneId for these endpoints is always the one below.
         * Docs: https://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region
         * PR: https://github.com/amplify-education/serverless-domain-manager/pull/171
         */
        this.defaultHostedZoneId = "Z2FDTNDATAQYW2";
        this.defaultSecurityPolicy = "TLS_1_2";
        this.domainName = data.distributionDomainName || data.regionalDomainName;
        this.hostedZoneId = data.distributionHostedZoneId ||
            data.regionalHostedZoneId ||
            this.defaultHostedZoneId;
        this.securityPolicy = data.securityPolicy || this.defaultSecurityPolicy;
    }
    return DomainInfo;
}());
module.exports = DomainInfo;
