// export default {
//     STRIPE_KEY: "pk_test_8bbaAvaOpTqkv7mKa5IQYvlV00UaBa1iAH",
//     MAX_ATTACHMENT_SIZE: 5000000,
//     s3: {
//         REGION: "us-east-1",
//         BUCKET: "notes-app-johan"
//     },
//     apiGateway: {
//         REGION: "us-east-1",
//         URL: "https://qllczy74fh.execute-api.us-east-1.amazonaws.com/prod"
//     },
//     cognito: {
//         REGION: "us-east-1",
//         USER_POOL_ID: "us-east-1_MzgDz9qJj",
//         APP_CLIENT_ID: "57a6ceb1m76o2mhl2ih8j670ep",
//         IDENTITY_POOL_ID: "us-east-1:a6d4731f-29c2-4a46-aa9c-481e953a3902"
//     }
// };

/*
 * NinjaCrazyStuff
 *
 */

const dev = {
    STRIPE_KEY: "pk_test_8bbaAvaOpTqkv7mKa5IQYvlV00UaBa1iAH",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-ts0bqm6hvt69"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "dev-api.notes.johanhanses.net"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_HWdHX1BnZ",
        APP_CLIENT_ID: "1rjksb1iafags78uv81ptk2sjg",
        IDENTITY_POOL_ID: "us-east-1:66fbdefd-8bc3-4f0d-b373-fc2699f6a5a8"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_8bbaAvaOpTqkv7mKa5IQYvlV00UaBa1iAH",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-14ra40jmt5h6l"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "api.notes.johanhanses.net"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_QkLcAWzlO",
        APP_CLIENT_ID: "6llmo461nitho0pt5m4m6uqem2",
        IDENTITY_POOL_ID: "us-east-1:7e3eb77a-560d-4121-93e1-2482a3c15487"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
