module.exports = {
  localhost: 'https://ss2.im.sandbox-playground.com:8443/',
  listClientsEndpoint: 'listClients',
  getOpenApiEndpoint:
    '{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/getOpenAPI',
  allowedMethodsEndpoint:
    '{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/allowedMethods',
  listMethodsEndpoint:
    '{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/listMethods',
  defaultExpectedResponseTime: 15000,
  getOpenApiExpectedSchema: {
    type: 'object',
  },
  acceptHeader: {
    key: 'Accept',
    value: 'application/json;charset=utf-8',
  },
  header: {
    key: 'X-Road-Client',
    value: 'SANDBOX/GOV/90000009/digitalregistries',
  },
  responseSchema: {
    type: 'object',
    properties: {
      member: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            objectType: {
              type: 'object',
              properties: {
                object_type: {
                  type: 'string',
                  enum: [
                    'MEMBER',
                    'SUBSYSTEM',
                    'SERVER',
                    'GLOBALGROUP',
                    'SECURITYCATEGORY',
                    'SERVICE',
                    'CENTRALSERVICE',
                    'LOCALGROUP',
                  ],
                },
              },
              additionalProperties: false,
            },
            serviceType: { type: 'string' },
            GovStackInstance: { type: 'string' },
            memberClass: { type: 'string' },
            memberCode: { type: 'string' },
            applicationCode: { type: 'string' },
            serviceCode: { type: 'string' },
            serviceVersion: { type: 'string' },
            endpointList: {
              type: 'object',
              properties: {
                member: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      method: { type: 'string' },
                      path: { type: 'string' },
                    },
                    additionalProperties: false,
                  },
                },
              },
              additionalProperties: false,
            },
          },
          additionalProperties: false,
        },
      },
    },
    required: ['member'],
    additionalProperties: false,
  },
};
